// 1 - Фокус
// Есть инпут. При потере фокуса,
// проверяем его, и если он пустой,
// красим границу в красный цвет!
const inputRef = document.querySelector('input');

function validate(str) {
  return str.length > 3;
}

inputRef.addEventListener('blur', e => {
  // const value = e.target.value;
  // console.log(inputRef.value);
  const { value } = e.target;

  // value === ''
  // value.length === 0;
  if (!validate(value)) {
    inputRef.classList.add('error');
  }
});

inputRef.addEventListener('focus', e => {
  e.target.classList.remove('error');
});
