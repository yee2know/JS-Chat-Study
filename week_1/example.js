const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  msg.reply(msg.content);
  Log.i(msg.author.name + " : " + msg.content);
}
bot.addListener(Event.MESSAGE, onMessage);
