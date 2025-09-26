const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  for (let i = 1; i <= 10; i++) {
    msg.reply(i);
  }
}
bot.addListener(Event.MESSAGE, onMessage);
