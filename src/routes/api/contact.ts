import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
          console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables");
          return new Response(JSON.stringify({ success: false, error: "Server configuration error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const body = await request.json();
          const data = body.data;

          if (!data || !data.name || !data.email || !data.message) {
            return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const text = `
📬 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${data.name}
✉️ <b>Email:</b> ${data.email}
🏢 <b>Company:</b> ${data.company || "Not provided"}
💰 <b>Budget:</b> ${data.budget || "Not provided"}

📝 <b>Message:</b>
${data.message}
          `.trim();

          const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
          const response = await fetch(telegramUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text,
              parse_mode: "HTML",
            }),
          });

          if (!response.ok) {
            const err = await response.text();
            console.error("Telegram API error:", err);
            return new Response(JSON.stringify({ success: false, error: "Failed to send message to Telegram" }), {
              status: 502,
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Contact API error:", error);
          return new Response(JSON.stringify({ success: false, error: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
