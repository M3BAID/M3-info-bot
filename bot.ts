import "https://deno.land/std@0.186.0/dotenv/load.ts";
import { Bot } from "https://deno.land/x/grammy@v1.16.0/mod.ts";
import { Api } from "https://deno.land/x/grammy@v1.16.0/mod.ts";


const BOT_TOKEN = Deno.env.get("BOT_TOKEN")

const bot = new Bot(BOT_TOKEN); 

//await bot.api.sendMessage(xxxxxxx,"Hi!");
// console.log(message.message_id);

bot.hears(".", async (ctx) => {
  await ctx.reply("test", {
    reply_to_message_id: ctx.msg.message_id,
  });
});

bot.command("start", async (ctx) => {
  await ctx.reply("User is: @" + ctx.chat.username + " " + "id: " + ctx.chat.id + " " + ctx.msg.message_id );
  console.log(ctx.chat.username + " , " + ctx.chat.id + " , " + ctx.chat.message_id);
});

console.log("bot started");
bot.start();