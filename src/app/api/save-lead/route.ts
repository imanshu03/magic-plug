import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export async function POST(req: NextRequest) {
  try {
    const { name, contact, services, company, project, referral } =
      await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join(
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            company,
            referral,
            services.join(", "),
            contact,
            project,
            dayjs().local().format("DD MMM, YYYY - hh:mm A"),
          ],
        ],
      },
    });
    return NextResponse.json({ message: "Data saved successfully!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
