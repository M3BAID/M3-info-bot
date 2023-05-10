import "https://deno.land/std@0.186.0/dotenv/load.ts";
import { Bot } from "https://deno.land/x/grammy@v1.16.0/mod.ts";


const BOT_TOKEN = Deno.env.get("BOT_TOKEN")

if (typeof BOT_TOKEN === "undefined")
  throw new Error("BOT_TOKEN is not defined")
const bot = new Bot(BOT_TOKEN); 

bot.command("test", async (ctx) => {
  await ctx.reply("Everything is Alright!", {
    reply_to_message_id: ctx.msg.message_id,
  });
});

bot.command("info", async (ctx) => {
  await ctx.reply(`
First name: ${ctx.from?.first_name || ""}
User is: @${ctx.from?.username || ""} 
id: ${ctx.chat.id}
Language code: ${ctx.from?.language_code || ""}
Bot?: ${ctx.from?.is_bot}`);
console.log(`UserName: ${ctx.from?.username} ,id: ${ctx.chat.id}`);
});

console.log("bot is starting...");
console.log("bot started");
bot.start();