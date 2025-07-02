import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini SDK
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey)
  throw new Error("❌ GEMINI_API_KEY is not defined in environment variables");

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

// Fallback rule-based responses
const getBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  if (/hello|hi|hey/.test(lowerMessage)) {
    return "Hello! I'm EduLight's AI assistant. How can I help you with your learning journey today?";
  }

  if (/course|class|lesson/.test(lowerMessage)) {
    return "We offer a variety of courses in design, development, and business. You can browse our course catalog to find what interests you most!";
  }

  if (/price|cost|fee/.test(lowerMessage)) {
    return "Our pricing varies by course. Most individual courses start at $29, and we also offer subscription plans. Would you like me to show you our pricing page?";
  }

  if (/help|support|issue/.test(lowerMessage)) {
    return "I'm here to help! You can contact our support team at support@edulight.com or check our FAQ section for common questions.";
  }

  if (/learn|start|beginner/.test(lowerMessage)) {
    return "Great question! I'd recommend starting with our foundational courses. For design, try 'UI/UX Fundamentals'. For development, start with 'Web Development Basics'. What interests you most?";
  }

  if (/figma|design tool/.test(lowerMessage)) {
    return "Figma is an excellent design tool! We have comprehensive courses on Figma for UI/UX design. It's perfect for beginners and professionals alike.";
  }

  if (/react|javascript|programming/.test(lowerMessage)) {
    return "Programming is a valuable skill! We offer courses in React, JavaScript, and other modern technologies. Our courses are designed to be practical and hands-on.";
  }

  return "That's an interesting question! I'm here to help you with your learning journey. Could you tell me more about what you'd like to learn or how I can assist you?";
};

// Gemini AI response
const getGeminiResponse = async (message: string): Promise<string> => {
  const prompt = `You are EduLight's AI assistant. Respond helpfully and concisely to the following student message:\n\n"${message}"`;

  try {
    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    return reply || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (err: any) {
    console.error("❌ Gemini API error:", err.message || err);
    throw new Error("Gemini AI failed to respond");
  }
};

// API route
export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please provide a valid message." },
        { status: 400 }
      );
    }

    console.log("🧠 User message:", message);

    let reply: string;

    try {
      reply = await getGeminiResponse(message);
      console.log("✅ Gemini reply:", reply);
    } catch (err) {
      console.warn("🔁 Falling back to rule-based response..." + err);
      reply = getBotResponse(message);
      console.log("🤖 Fallback reply:", reply);
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("💥 Internal API error:", err);
    return NextResponse.json(
      {
        reply:
          "Sorry, I'm having trouble connecting right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
