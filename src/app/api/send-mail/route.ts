import MailService from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

MailService.setApiKey(process.env.SEND_GRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { name, contact, services } = await req.json();

    await MailService.send({
      templateId: process.env.MAIL_TEMPLATE_ID as string,
      from: {
        email: process.env.SENDER_MAIL!,
        name: "MagicPlug Tech 🚀",
      },
      to: contact,
      dynamicTemplateData: {
        clientName: name,
        services: services.join(", "),
      },
    });
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
