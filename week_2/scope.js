const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  if (msg.content == "HI") {
    let a = 10; //색을 칠한 부분이 변수 a의 스코프입니다.
  }

  msg.reply(a); //오류 발생(스코프 벗어남)
}
bot.addListener(Event.MESSAGE, onMessage);
