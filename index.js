import TelegramBot from "node-telegram-bot-api";
import cron from "node-cron";
import "dotenv/config";

const token = process.env.API_ID;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  cron.schedule("0 50 23 7 * *", () =>
    bot.sendMessage(
      msg.chat.id,
      "<b><i> Вже завтра знімається щомісячна підписка на YouTube Premium.</i></b> \n\n <i>Прошу кожного сплатити дану операцію за реквізитами:</i> \n\n Monobank: 5375411423428171 \n Тариф: 30 грн",
      { parse_mode: "HTML" }
    )
  );
});
