const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  for (let i = 1; i <= 100; i++) {
    //1부터 100까지
    if (i % 2 == 0) {
      //i의 2로 나눈 나머지가 0이라면
      msg.reply(i); //i 출력
    }
  }
}
bot.addListener(Event.MESSAGE, onMessage);
