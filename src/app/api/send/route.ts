import VercelInviteUserEmail from "@/components/molecule/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, message, phone, services } = body;
    const data = await resend.emails.send({
      from: 'The Sociomatic Contact <hello@thesociomatic.com>',
      to: ["musiur.opu@gmail.com"],
      subject: "Contact Us - Sociomatic",
      react: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        services: ${services}
        message: ${message}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
