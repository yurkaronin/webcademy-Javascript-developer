let rock = 11;


/* if ( rock > 21) {
  console.log("вдарим року!");
} else if (rock == 21) {
  console.log("ровно 21!")
} else {
  console.log("тебе еще рано, дружок.");
} */

if (rock >= 21 && rock <= 52) {
  console.log("Вам от 21 до 52 лет");
} else if (rock < 21) {
  console.log("Вам меньше 21")
} else if (rock > 52) {
  console.log("больше 52 лет")
} else {
  console.log("Не понятно что вы ввели. Наверное это не возраст, а какое то слово ");
}