const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  let a = 10;
  let b;
  b = "String";

  msg.reply(a); // 10 출력
  msg.reply(b); // String 출력
}
bot.addListener(Event.MESSAGE, onMessage);
