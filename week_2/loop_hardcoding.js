const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  msg.reply("1");
  msg.reply("2");
  msg.reply("3");
  msg.reply("4");
  msg.reply("5");
  msg.reply("6");
  msg.reply("7");
  msg.reply("8");
  msg.reply("9");
  msg.reply("10");
}
bot.addListener(Event.MESSAGE, onMessage);
