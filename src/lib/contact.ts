"use server";
import { createServerFn } from "@tanstack/react-start";

interface ContactData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}

export const sendTelegramMessage = createServerFn({ method: "POST" })
  .validator((data: ContactData) => data)
  .handler(async ({ data }) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables");
      return { success: false, error: "Server configuration error" };
    }

    const text = `
<b>New Lead from APARTNER.PRO</b>
  
<b>Name:</b> ${data.name}
<b>Email:</b> ${data.email}
<b>Company:</b> ${data.company || "N/A"}
<b>Budget:</b> ${data.budget || "N/A"}
  
<b>Message:</b>
${data.message}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Telegram API error:", errorText);
        return { success: false, error: "Failed to send message to Telegram" };
      }

      return { success: true };
    } catch (err) {
      console.error("Failed to send telegram message:", err);
      return { success: false, error: "Network or Server error" };
    }
  });
