let title = ''

if(title === ''){
  console.log('Название задачи не указано');
}else{
  console.log("Задача", title);
}


let tasks = 5
if(tasks === 0){
  console.log('Список пуст');
}else if(tasks <= 3){
  console.log('Немного задач');
}else{
  console.log("Много задач");
}



let amount = 3200; 

if (amount === 0) {
  console.log("Корзина пуста");
} else if (amount < 1000) {
  console.log("Скидка не применяется");
} else if (amount < 5000) {
  console.log("Скидка 5%");
} else {
  console.log("Скидка 10%");
}






function sum(a, b){
  return a + b
}

console.log(sum(3, 4));
console.log(sum(10, 5));

function isTaskDone(status){
  return status === "выполнена"
}

console.log(isTaskDone("выполнена"));
console.log(isTaskDone("активна"));

function taskSummary(total, done){
  let active = total - done
  return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active
}

console.log(taskSummary(5, 3));
console.log(taskSummary(10, 4));
