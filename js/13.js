// Зададим переменные описывающие персонажа 
let name = "Стефанчик";
let gender = "Мужик";
let city = "Краснодар";
let age = "27";
let profession = "Верстальщик";

const t1 = function (name) {
  console.log("Привет! Моё имя " + name + ". Приятно познакомиться!");
}

const t2 = function (name, gender, age, city, profession) {
  console.log("Меня зовут " + name + ". Я " + gender + ". Мне " + age + " лет. Живу в городе " + city + ". Моя профессия " + profession + ".");
}


t1(name);
t2(name, gender, age, city, profession);

console.log(" ");
console.log("А теперь создадим объект");


// создаём объект 
let player = {
  // свойства объекта 
  name: "Стефанчик",
  gender: "Мужик",
  city: "Краснодар",
  age: "27",
  profession: "Верстальщик",

  // методы объекта 
  characterAction: function () {
    console.log("Меня зовут " +
      this.name +
      ". Я " +
      this.gender +
      ". Мне " +
      this.age +
      " лет. Живу в городе " +
      this.city +
      ". Моя профессия " +
      this.profession + "."
    );
  }
}

player.characterAction();


// Создаём конструктор объектов 
function Player(name, gender, age, city, profession) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.city = city;
  this.profession = profession;

  // Методы по конструктору
  this.characterAction = function () {
    console.log("Меня зовут " +
      this.name +
      ". Я " +
      this.gender +
      ". Мне " +
      this.age +
      " лет. Живу в городе " +
      this.city +
      ". Моя профессия " +
      this.profession + "."
    )
  };

};

// Пробуем создавать новых игроков 

let player1 = new Player("Святослав", "мужчинка", 27, "Минеральные-Воды", "Frontend-developer");

// Пробуем применить метод конструктора 
player1.characterAction();