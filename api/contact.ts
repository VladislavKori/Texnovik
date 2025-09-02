import nodemailer from "nodemailer";

export async function GET(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Заявка с сайта" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "Новая заявка с сайта",
      text: `
        Имя: ${name}
        Телефон: ${phone}
        Сообщение: ${message || "Пустое"}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ success: false, error: "Ошибка отправки" }, { status: 500 });
  }
}