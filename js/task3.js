// Пример 3 - Ctrl
// Дан элемент. 
// Сделайте так, чтобы по клику на него он красился в красный цвет, 
// но только если в момент клика нажата клавиша Ctrl.
const rectRef = document.querySelector('.rect');

rectRef.addEventListener('click', event => {
  console.dir(event);
  if (event.ctrlKey) {
    // rectRef.style.backgroundColor = 'teal';
    rectRef.classList.add('red');
  }

  if (event.altKey) {
    // rectRef.style.backgroundColor = 'teal';
    rectRef.classList.remove('red');
  }
});

rectRef.addEventListener('contextmenu', () =>{
  console.log('Rigth click');
});
