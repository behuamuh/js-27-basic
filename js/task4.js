// 4 - Инпут
// Дан инпут. В него вводится текст и нажимается клавиша Enter 
// (ее код имеет номер 13).
// Сделайте так, чтобы по нажатию Enter 
// введенный текст попадал в абзац под инпутом, 
// а содержимое инпута очищалось.

const inputRef = document.querySelector('input');
const textRef = document.querySelector('.text');
const formRef = document.querySelector('form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  
  textRef.textContent = inputRef.value;
  inputRef.value = '';
});

// document.addEventListener('keydown', event => {
//   if (event.code !== 'Enter') return;

//   // const { value } = inputRef;

//   textRef.textContent = inputRef.value;
//   inputRef.value = '';
// });
