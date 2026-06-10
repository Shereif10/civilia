import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "CIVILIA Contact Form <onboarding@resend.dev>",
      to: "info@civiliadevelopments.com",
      replyTo: email,
      subject: `New Contact Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #CD1417; margin-bottom: 24px;">New Contact Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; color: #8e8e8e; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #3d3d3d; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; color: #8e8e8e;">Email</td>
              <td style="padding: 12px 0; color: #3d3d3d; font-weight: 600;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; color: #8e8e8e;">Phone</td>
              <td style="padding: 12px 0; color: #3d3d3d; font-weight: 600;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #8e8e8e; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #3d3d3d;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
