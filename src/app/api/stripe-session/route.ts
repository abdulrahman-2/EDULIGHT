import { NextResponse } from "next/server";
import Stripe from "stripe";
import { courseContent } from "@/constants";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "line_items.data.price.product"],
    });

    const matchedCourses = session.line_items?.data
      .map((item: any) => {
        const product = item.price.product;
        const courseId = Number(product.metadata?.courseId);

        return courseContent.find((course) => course.id === courseId);
      })
      .filter(Boolean);

    return NextResponse.json({ matchedCourses });
  } catch (err) {
    console.error("Error retrieving session:", err);
    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { status: 500 }
    );
  }
};

