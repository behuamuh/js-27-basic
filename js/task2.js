// Пример 2 - Вывести 4 красных квадрата, 
// при клике на любой, он становиться зеленым, 
// при этом если есть уже зеленый квадрат, 
// то он становиться обратно красным и так можно кликать на любой квадрат, 
// он становиться зеленым, а старый зеленый квадрат обратно крассным и тд.

const parenRef = document
  .querySelector('.parent');
const blockRefs = document
  .querySelectorAll('.block');
  
function clearBlocks() {
  blockRefs.forEach(blockRef => {
    blockRef.classList.remove('block_active');
  });
}

parenRef.addEventListener('click', event => {
  if (!event.target.classList.contains('block')) return;

  clearBlocks();
  event.target.classList.add('block_active');
});
