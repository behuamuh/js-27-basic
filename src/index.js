/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Пример 2 - инфинити скрол с троттлингом

import countries from './countries';
import throttle from './throttle';

let handlerCallCount = 0;
let startIndex = 0;
const COUNTRY_COUNT = 10;

const listRef = document.querySelector('.country-list');

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;

  return countryRef;
}

function renderPartOfCounries() {
  const partyOfCountries = countries
    .slice(startIndex, startIndex + COUNTRY_COUNT);
  const countryRefs = partyOfCountries.map(createCountryRef);

  listRef.append(...countryRefs);
}

function scrollHandler() {
  console.log(++handlerCallCount);
  if (!isScrollToBottom()) return;

  renderPartOfCounries();

  startIndex += COUNTRY_COUNT;
}

renderPartOfCounries();

window.addEventListener('scroll', throttle(scrollHandler, 200));

// import countries from './countries';
// import debounce from './debounce';

// let handlerCallCount = 0;

// const listRef = document.querySelector('.country-list');
// const searchRef = document.querySelector('.search');

// function createCountryRef(country) {
//   const countryRef = document.createElement('h2');
//   countryRef.classList.add('country');
//   countryRef.textContent = country;

//   return countryRef;
// }

// function renderFilteredCounries(filteredCounries) {
//   const countryRefs = filteredCounries.map(createCountryRef);

//   listRef.append(...countryRefs);
// }

// renderFilteredCounries(countries);

// const handleSearch = (event) => {
//   console.log(++handlerCallCount);
//   const search = event.target.value;
//   const filteredCountries = countries.filter((country) => {
//     if (search === '') return true;

//     return country.toLowerCase()
//       .includes(search.toLowerCase());
//   });

//   listRef.innerHTML = '';
//   renderFilteredCounries(filteredCountries);
// };

// searchRef.addEventListener('input', debounce(handleSearch, 1000));

// 1. Задача. Выведите на экран текущие
// день, месяц и год в формате 'год-месяц-день'.
// const now = new Date();

// const formatDateAndMonth = (num) => String(num).padStart(2, 0);

// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const date = now.getDate();

// console.log(`${year}-${formatDateAndMonth(month)}-${formatDateAndMonth(date)}`);

// console.log(now.toLocaleString(undefined, {
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit',
// }));

// 2. Выведите на экран количество часов,
// прошедшее между 1 марта 1988 года и текущим моментом

// const last = new Date(1988, 2, 1);
// // console.log(last.toString());
// const ms = now.getTime() - last.getTime();

// const MILLISECONDS_PER_HOURS = 1000 * 60 * 60;
// const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOURS * 24;

// const hours = Math.round(ms / MILLISECONDS_PER_HOURS);

// console.log(hours);

// 3. Создайте инпут, в который пользователь вводит дату своего рождения в формате
// '2014-12-31' (с конкретным годом).
// По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения.
// const inputRef = document.querySelector('.date');
// const resultRef = document.querySelector('.result');

// inputRef.addEventListener('blur', () => {
//   if (!Date.parse(inputRef.value)) return;

//   const birthDate = new Date(inputRef.value);

//   birthDate.setFullYear(birthDate > now ? now.getFullYear() : now.getFullYear() + 1);

//   const ms = birthDate.getTime() - now.getTime();

//   const days = Math.ceil(ms / MILLISECONDS_PER_DAY);

//   resultRef.textContent = days;
// });

// const timerRef = document.querySelector('.timer');
// const btnRef = document.querySelector('.btn');

// let timer = null;
// let time = 0;

// const tick = () => {
//   time += 1;
//   timerRef.innerHTML = time;

//   if (timer) {
//     setTimeout(tick, 1000);
//   }
// };

// btnRef.addEventListener('click', () => {
//   if (timer) {
//     clearTimeout(timer);
//     timer = null;
//   } else {
//     timer = setTimeout(tick, 1000);
//   }

//   btnRef.textContent = timer ? 'Stop' : 'Start';
// });

// const timerRef = document.querySelector('.timer');
// const btnRef = document.querySelector('.btn');

// let timer = null;
// let time = 0;

// const startTimer = () => {
//   time += 1;
//   timerRef.innerHTML = time;
// };

// btnRef.addEventListener('click', () => {
//   if (timer) {
//     // Останавливаем таймер
//     clearInterval(timer);
//     timer = null;
//   } else {
//     // запускаем
//     timer = setInterval(startTimer, 1000);
//   }

//   btnRef.textContent = timer ? 'Stop' : 'Start';
// });
