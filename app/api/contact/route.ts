import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

const sanitize = (value: string): string =>
  value.replace(/<[^>]*>?/gm, "").replace(/[\u0000-\u001F\u007F]/g, "").trim();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form input. Please check your entries and try again." }, { status: 400 });
    }

    const cleaned = {
      name: sanitize(parsed.data.name),
      email: sanitize(parsed.data.email),
      eventType: sanitize(parsed.data.eventType),
      message: sanitize(parsed.data.message)
    };

    console.info("Booking request received", { ...cleaned, receivedAt: new Date().toISOString() });

    return NextResponse.json({ message: "Thanks for reaching out! We will respond shortly." });
  } catch {
    return NextResponse.json({ error: "Unable to submit your request right now. Please try again later." }, { status: 500 });
  }
}
