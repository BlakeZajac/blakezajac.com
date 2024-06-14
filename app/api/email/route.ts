import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const formData = await request.json();

    const emailContent = `
    Name: ${formData.name}
    Company: ${formData.company}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Message: ${formData.message || "N/A"}
    Lead Location: ${formData.leadLocation || "N/A"}    
    `;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.GMAIL_EMAIL,
        to: process.env.GMAIL_EMAIL,
        subject: "blakezajac.com - New Contact Form Submission",
        text: emailContent,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email delivered.");
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: "Email delivered." });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
