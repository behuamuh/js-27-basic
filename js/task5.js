/* eslint-disable no-undef */
// 5 - инфинити скрол IntersectionObserver
let handlerCallCount = 0;
let startIndex = 0;
const COUNTRY_COUNT = 10;

const listRef = document.querySelector('.country-list');
const anchorRef = document.querySelector('.anchor');

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

function observerCallback([entrie], observerRef) {
  console.log(++handlerCallCount);

  if(!entrie.isIntersecting) return;

  renderPartOfCounries();
  startIndex += COUNTRY_COUNT;

  if (startIndex >= countries.length) {
    observerRef.unobserve(anchorRef);
  }
}

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0,
});

observer.observe(anchorRef);

renderPartOfCounries();
