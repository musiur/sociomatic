import { NextResponse } from "next/server";

function runMiddleware(request: Request, response: Response, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(request, response, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export async function POST(request: Request, response: Response) {
  try {
    const body = await request.json();
    const { email, name, message, phone, services } = body;

    const nodemailer = require("nodemailer");
    const Cors = require("cors");
    const cors = Cors({
      methods: ["POST", "GET", "HEAD"],
      allowedOrigin: "*",
    });

    await runMiddleware(request, response, cors);

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
      from: process.env.NEXT_PASSWORD,
      to: process.env.NEXT_PASSWORD,
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
    return NextResponse.json({ error });
  }
}
