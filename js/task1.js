// 1 - Дан блок, внутри кнопка.
// При наведении на кнопку, красить блок в красный цвет
// const cardRef = document.querySelector('.card');
// const cardDeleteRef = document.querySelector('.card__delete');

// cardDeleteRef.addEventListener('mouseover', event => {
//   cardRef.classList.add('card_focus');
// });

// cardDeleteRef.addEventListener('mouseout', event => {
//   cardRef.classList.remove('card_focus');
// });

const mouseOverListener = event => {
  const isTarfetDeleteBtn = event.target.classList.contains('card__delete');
  
  if (isTarfetDeleteBtn) {
    event.currentTarget.classList.add('card_focus');
  }
};

const mouseOutListener = event => {
  const isTarfetDeleteBtn = event.target.classList.contains('card__delete');
  
  if (isTarfetDeleteBtn) {
    event.currentTarget.classList.remove('card_focus');
  }
};

const cardRef = document.querySelector('.card');

cardRef.addEventListener('mouseover', mouseOverListener);

cardRef.addEventListener('mouseout', mouseOutListener);
