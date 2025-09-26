const bot = BotManager.getCurrentBot();

function onMessage(msg) {
  let code = 1;
  let fruit;

  switch (score) {
    case 1:
      fruit = "사과";
      break; //break가 없으면 아래까지 계속 감
    //있으면 여기서 멈춤
    case 2:
      fruit = "바나나";
      break;
    default:
      fruit = "복숭아";
  }

  msg.reply(fruit);
}
bot.addListener(Event.MESSAGE, onMessage);
