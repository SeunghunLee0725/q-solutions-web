import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail SMTP 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // 환경변수 확인
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail credentials not configured");
      // 개발 환경에서는 성공 응답 반환
      console.log("Contact form submission (email disabled):", data);
      return NextResponse.json({ success: true, message: "Email service not configured" });
    }

    // 이메일 내용 구성
    const mailOptions = {
      from: `Q-Solutions 웹사이트 <${process.env.GMAIL_USER}>`,
      to: ["cto@q-solutions.net", "ceo@q-solutions.net", "sh.yoon@q-solutions.net", "jy.bae@q-solutions.net"],
      replyTo: data.email,
      subject: `[문의] ${data.type} - ${data.name}`,
      html: `
        <div style="font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">새로운 문의가 접수되었습니다</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 100px; color: #374151;">이름</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">이메일</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <a href="mailto:${data.email}" style="color: #22c55e;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">연락처</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.phone || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">기관</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.organization || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">문의유형</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${data.type}</span>
                </td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 10px;">문의 내용</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; line-height: 1.6;">
                ${data.message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
              이 메일은 Q-Solutions 웹사이트 문의 폼에서 자동 발송되었습니다.
            </div>
          </div>
        </div>
      `,
    };

    // 이메일 발송
    await transporter.sendMail(mailOptions);
    console.log("Contact form email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
