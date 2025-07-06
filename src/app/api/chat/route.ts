import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini SDK
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey)
  throw new Error("❌ GEMINI_API_KEY is not defined in environment variables");

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

// Detect if the message is in Arabic
const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

// Fallback rule-based response
const getBotResponse = (message: string, lang: "ar" | "en" = "en"): string => {
  const lower = message.toLowerCase();

  if (lang === "ar") {
    if (/اهلا|هاي|مرحبا/.test(lower)) {
      return "أهلاً بيك! أنا مساعد EduLight الذكي. إزاي أقدر أساعدك؟";
    }

    if (/كورس|دورة|درس/.test(lower)) {
      return "عندنا كورسات متنوعة في التصميم، البرمجة، والأعمال. تقدر تتصفح الكورسات وتشوف اللي يناسبك!";
    }

    if (/السعر|التكلفة|الرسوم/.test(lower)) {
      return "الأسعار بتختلف حسب الكورس. معظم الكورسات بتبدأ من 29 دولار، وفي خطط اشتراك كمان.";
    }

    if (/دعم|مشكلة|مساعدة/.test(lower)) {
      return "لو محتاج مساعدة، كلم فريق الدعم على support@edulight.com أو شوف صفحة الأسئلة الشائعة.";
    }

    if (/تايه|مش عارف|بحب|ابدأ/.test(lower)) {
      return `كتير من الطلاب بيكونوا تايهين في البداية. احكيلي شوية عن اهتماماتك، وأنا هرشحلك المجال المناسب وكورس تبدأ بيه.`;
    }

    if (/برمجة|كود|javascript|react/.test(lower)) {
      return `ممتاز! لو بتحب البرمجة، ابدأ بكورس "JavaScript Basics" أو "React JS Fundamentals". زور صفحة الكورسات علشان تبدأ 🚀`;
    }

    if (/تصميم|figma|ui|ux/.test(lower)) {
      return `لو بتحب التصميم، أرشحلك "UI/UX Fundamentals" أو "Figma for Beginners". ممكن تدخل على صفحة الكورسات وتشوفهم ✨`;
    }

    if (/بيانات|أرقام|تحليل/.test(lower)) {
      return `تحليل البيانات اختيار رائع! جرب كورس "Data Analysis for Beginners". متاح في صفحة الكورسات 👨‍💻`;
    }

    return "قولّي إيه اللي حابب تتعلمه أو تحققه، وأنا هساعدك في تحديد الطريق المناسب ليك.";
  }

  // English
  if (/hello|hi|hey/.test(lower)) {
    return "Hello! I'm EduLight's AI assistant. How can I help you today?";
  }

  if (/course|class|lesson/.test(lower)) {
    return "We offer a variety of courses in design, development, and business. Feel free to browse our catalog!";
  }

  if (/price|cost|fee/.test(lower)) {
    return "Prices vary by course. Most start at $29, and we offer subscription plans too.";
  }

  if (/help|support|issue/.test(lower)) {
    return "Need help? Contact our support at support@edulight.com or check the FAQ page.";
  }

  if (/lost|confused|start|beginner|interested/.test(lower)) {
    return `No worries! Many students feel lost at the beginning. Tell me what you’re interested in, and I’ll suggest a field and course to get started.`;
  }

  if (/code|programming|javascript|react/.test(lower)) {
    return `If you're into programming, start with "JavaScript Basics" or "React JS Fundamentals". You can find them on the Courses page 🚀`;
  }

  if (/design|figma|ui|ux/.test(lower)) {
    return `If you like design, go for "UI/UX Fundamentals" or "Figma for Beginners". Check them out on the Courses page ✨`;
  }

  if (/data|analysis|numbers/.test(lower)) {
    return `Data analysis is a great choice! Start with "Data Analysis for Beginners" available in the Courses page 📊`;
  }

  return "That's interesting! Tell me more about what you’d like to learn or achieve.";
};

// Gemini AI response
const getGeminiResponse = async (
  message: string,
  lang: "ar" | "en"
): Promise<string> => {
  const prompt =
    lang === "ar"
      ? `أنت مساعد EduLight الذكي. ساعد الطالب بناءً على رسالته، وإذا كان تايه، اسأله عن اهتماماته واقترح مجال مناسب وكورس يبدأ به. لا تكتب مقدمة، فقط الرد.\n\n"${message}"`
      : `You are EduLight's AI assistant. Help the student based on their message. If they're confused, ask about their interests and suggest a suitable field and course. Be concise and helpful.\n\n"${message}"`;

  try {
    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    return (
      reply ||
      (lang === "ar"
        ? "عذرًا، لم أتمكن من الرد الآن."
        : "Sorry, I couldn’t generate a response at the moment.")
    );
  } catch (err: any) {
    console.error("❌ Gemini API error:", err.message || err);
    throw new Error("Gemini AI failed to respond");
  }
};

// API Route
export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please provide a valid message." },
        { status: 400 }
      );
    }

    const lang = isArabic(message) ? "ar" : "en";
    console.log("🌍 Language:", lang, "| 🧠 Message:", message);

    let reply: string;

    try {
      reply = await getGeminiResponse(message, lang);
      console.log("✅ Gemini reply:", reply);
    } catch (err) {
      console.warn("🔁 Gemini failed. Using fallback...", err);
      reply = getBotResponse(message, lang);
      console.log("🤖 Fallback reply:", reply);
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("💥 Internal Error:", err);
    return NextResponse.json(
      {
        reply:
          "Sorry, I'm having trouble connecting right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
