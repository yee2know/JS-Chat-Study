const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  let score = 90;
  let grade;

  if (score > 80) {
    //score의 값이 80보다 큰가?
    grade = "A"; //크면 grade에 A 할당
  } else {
    //아니면
    grade = "F"; //grade에 F 할당
  }

  msg.reply(grade);
}
bot.addListener(Event.MESSAGE, onMessage);
