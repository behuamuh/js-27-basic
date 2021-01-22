// Пример 2 - Попап
// Дан простой скрытый попап.
// При нажатии на кнопку, показать попап,
// при нажатии на ESC скрыть
const openPopupBtnRef = document.querySelector('.js-open-popup-btn');
const popupRef = document.querySelector('.js-popup');

const handleClosePopup = event => {
  console.log(event);

  if (event.code === 'Escape') {
    popupRef.classList.remove('popup_open');

    document.removeEventListener('keydown', handleClosePopup);
  }
};

openPopupBtnRef.addEventListener('click', () =>{
  popupRef.classList.add('popup_open');

  document.addEventListener('keydown', handleClosePopup);
}); 
