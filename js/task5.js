// 5 - Туду лист.
// Инпут, куда вводится текст.
// При нажатии на ентер, в список ниже,
// добавляется тудушка. При клике на нее,
// она становится выполненной, т.е. текст зачеркивается
function completeTodo(event) {
  event.target.classList.toggle('complete');
}

function createTodo(text) {
  const liRef = document.createElement('li');
  liRef.textContent = text;

  liRef.addEventListener('click', completeTodo);

  return liRef;
}

const inputRef = document.querySelector('input');
const todoListRef = document.querySelector('.todo-list');
const formRef = document.querySelector('form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = inputRef;

  if (!value) return;

  const todoRef = createTodo(value);

  todoListRef.appendChild(todoRef);
  // textRef.textContent = inputRef.value;
  inputRef.value = '';
});
