import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, discovery, projectDetails } = await request.json();

    // Configure transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'areeshasoomro031@gmail.com',
        pass: 'YOUR_GMAIL_APP_PASSWORD', // Generate a 16-digit App Password from your Google Account security settings
      },
    });

    // Send the email directly to your inbox automatically
    await transporter.sendMail({
      from: email,
      to: 'areeshasoomro031@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      text: `
        You have received a new project inquiry:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Discovery Source: ${discovery}

        Project Details:
        ${projectDetails}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 });
  }
}