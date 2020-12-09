// Пример 4 - Калькулятор и this
// Создайте объект calculator (калькулятор) с тремя методами:

// read(a, b)- запрашивает два значения 
// и сохраняет их как свойства объекта.
// sum() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

const calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

calculator.read(15, 20);
const sum = calculator.sum();
console.log(sum);

const mult = calculator.mult();
console.log(mult);

calculator.read(5, 21);
const sum2 = calculator.sum();
console.log(sum2);

const mult2 = calculator.mult();
console.log(mult2);
