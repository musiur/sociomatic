import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const origin = request.headers.get("origin");
    if (
      origin &&
      !["http://localhost:3000", "https://thesociomatic.com", "https://www.thesociomatic.com"].includes(origin)
    ) {
      return new NextResponse(null, {
        status: 400,
        statusText: "Bad Request",
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
    const { email, name, message, phone, services } = body;

    const nodemailer = require("nodemailer");

    const personalMailServerTransporter = nodemailer.createTransport({
      host: process.env.NEXT_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_USER,
        pass: process.env.NEXT_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_VIA_FROM,
      to: process.env.NEXT_TO,
      replyTo: email,
      subject: "Sociomatic - Contact Form",
      text: `name: ${name}; phone: ${phone}; services: ${services}; message: ${message}`,
    };

    const personalServerInfo = await personalMailServerTransporter.sendMail(
      mailOptions
    );
    console.log("Email sent to personal mail server:", personalServerInfo);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
