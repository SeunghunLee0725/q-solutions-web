import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // 이메일 전송 로직
    // 실제 구현 시 Resend, SendGrid, Nodemailer 등 사용
    console.log("Contact form submission:", data);

    // 임시: 개발 중에는 성공 응답 반환
    // 실제 구현 시 이메일 전송 서비스 연동 필요
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Q-Solutions Website <noreply@q-solutions.net>',
      to: 'cto@q-solutions.net',
      subject: `[문의] ${data.type} - ${data.name}`,
      html: `
        <h2>새로운 문의가 접수되었습니다</h2>
        <p><strong>이름:</strong> ${data.name}</p>
        <p><strong>이메일:</strong> ${data.email}</p>
        <p><strong>연락처:</strong> ${data.phone || '-'}</p>
        <p><strong>기관:</strong> ${data.organization || '-'}</p>
        <p><strong>문의유형:</strong> ${data.type}</p>
        <p><strong>내용:</strong></p>
        <p>${data.message}</p>
      `,
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
