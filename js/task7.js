// Написать объект ladder - объект, 
// который позволяет подниматься вверх и спускаться. 
// Пример работы должен быть таким:

// ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
// ladder.up(); 
// ladder.up();
// ladder.showStep(); // 2
// ladder.down();
// ladder.showStep(); // 1

const ladder = {
  step: 0,
  showStep() {
    console.log(this.step);
  },
  up(amount = 1) {
    if (amount < 1) return;
    this.step += amount;
  },
  down(amount = 1) {
    if (amount < 1) return;
    if (this.step === 0) return;
    this.step -= amount
  },
};

ladder.showStep();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.down();
ladder.showStep();

ladder.up(10);
ladder.showStep();
ladder.down(11);
ladder.showStep();
