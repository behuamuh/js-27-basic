// Пример 6 - Задача 6
// Вы — руководитель команды, которая разрабатывает игру, 
// хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
// Объекты - хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
// Какой есть баг и как  его поправить.

function Hamster() {
  this.food = []; // пустой "живот"
}

Hamster.prototype.found = function (something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
const speedy = new Hamster();
const lazy = new Hamster();

speedy.found('яблоко');
speedy.found('орех');

console.log(speedy.food);
console.log(lazy.food);
