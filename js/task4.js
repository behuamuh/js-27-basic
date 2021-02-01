/* eslint-disable no-undef */
// 4 - живой поиск с дебаунсом
let handlerCallCount = 0;

const listRef = document.querySelector('.country-list');
const searchRef = document.querySelector('.search');

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;

  return countryRef;
}

function renderFilteredCounries(filteredCounries) {
  const countryRefs = filteredCounries.map(createCountryRef);

  listRef.append(...countryRefs);
}

renderFilteredCounries(countries);

const handleSearch = event => {
  console.log(++handlerCallCount);
  const search = event.target.value;
  const filteredCountries = countries.filter(country => {
    if (search === '') return true;

    return country.toLowerCase()
      .includes(search.toLowerCase());
  });
  
  listRef.innerHTML = '';
  renderFilteredCounries(filteredCountries);
};

searchRef.addEventListener('input', _.debounce(handleSearch, 200));
