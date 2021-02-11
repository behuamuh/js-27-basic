import flatpickr from "flatpickr";
import anime from 'animejs/lib/anime.es.js';

flatpickr('#date', {
  minDate: "2021-01",
  maxDate: "2021-05",
  onOpen: (selectedDates) => console.log(selectedDates),
});

anime({
  targets: '#animate',
  left: '240px',
  backgroundColor: '#151515',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad'
});
