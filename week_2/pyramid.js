const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  //입력은 숫자만 받는다고 가정
  let pyramid = "";
  for (let i = 1; i <= msg.content; i++) {
    for (let j = 1; j <= i; j++) {
      pyramid = pyramid + "*";
    }
    if (i != msg.content) {
      pyramid = pyramid + "\n"; // "\n"는 개행
    }
  }
  msg.reply(pyramid);
}
bot.addListener(Event.MESSAGE, onMessage);
