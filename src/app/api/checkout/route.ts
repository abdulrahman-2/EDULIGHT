import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: Request) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const reqBody = await request.json();
    const { items, email } = reqBody;

    const updatedItems = items.map((item: any) => {
      const rawPrice =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("$", ""))
          : item.price;

      const discount = item.discountPercentage || 0;
      const unitAmount = Math.round(rawPrice * 100 * (1 - discount / 100));

      if (isNaN(unitAmount)) {
        throw new Error(`Invalid unit_amount for item ${item.title}`);
      }

      return {
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: unitAmount,
          product_data: {
            name: item.title,
            description: item.description,
            images: item.images,
            metadata: {
              courseId: String(item.id),
            },
          },
        },
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: updatedItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: "Connection is alive",
      success: true,
      id: session.id,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
