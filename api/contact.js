import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Not Found" });
  }

  try {
    let body = "";
    for await (const chunk of req) body += chunk;
    const { name, phone, message, fromPage } = JSON.parse(body);

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
Отправлено со страницы: ${fromPage}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: "Ошибка отправки" });
  }
}
