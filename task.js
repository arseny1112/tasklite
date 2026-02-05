

// let amount = 3200; 

// if (amount === 0) {
//   console.log("Корзина пуста");
// } else if (amount < 1000) {
//   console.log("Скидка не применяется");
// } else if (amount < 5000) {
//   console.log("Скидка 5%");
// } else {
//   console.log("Скидка 10%");
// }






function sum(a, b){
  return a + b
}

// console.log(sum(3, 4));
// console.log(sum(10, 5));

function isTaskDone(status){
  return status === "выполнена"
}

// console.log(isTaskDone("выполнена"));

function taskSummary(total, done){
  let active = total - done
  return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active
}


let task1 = "Купить молоко";
let task2 = "Позвонить врачу";
let task3 = "Сделать уроки";

let numbers = [5, 10, 15, 20];


let objs = [42, "Привет", true]



let cities = ["Тюмень", "Мурманск", "Юровка", "Пермь"]

console.log(cities[2]);

let task = {
  id: 1,
  title: "Вася во всём виноват!!!",
  status: "активна"
}

console.log(task.status);


let tasks = [
  {id: 1, title: "Вася ни в чём не виноват(", status: "активна"},
  {id: 2, title: "Позвонить психиатру", status: "выполнена"},
  {id: 3, title: "Сдать Афину в психушку", staus: "активна"}
]

tasks.push({id: 4, title: "Прогулка", status: "активна"})

console.log(tasks);

console.log(task.title.length);