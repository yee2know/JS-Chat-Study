const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  let i = 1;
  while (i <= 10) {
    msg.reply(i);
    i++;
  }
}
bot.addListener(Event.MESSAGE, onMessage);
