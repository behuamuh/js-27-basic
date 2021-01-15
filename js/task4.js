// 4 - Метод Array.prototype.flatMap
// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию, 
// оставив в uniqueTopics только уникальные элементы.

const courses = [
  { 
    name: 'Basic HTML+CSS', 
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
  },
  { 
    name: 'Intermediate HTML+CSS', 
    topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'], 
  },
  { 
    name: 'Basic JavaScript', 
    topics: ['VSCode', 'Type system', 'Loops', 'Functions', 'Conditions', 'Classes', 'DOM', 'Git', 'GitHub'],
  },
  { 
    name: 'Intermediate JavaScript', 
    topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Promises', 'AJAX', 'Git', 'GitHub'],
  },
];

// const allTopics = courses.reduce((acc, item) => {
//   acc.push(...item.topics);

//   return acc;
// }, []);

const allTopics = courses.flatMap(item => item.topics);

console.log(allTopics);
const uniqueTopics = allTopics.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});

const itemsWithoutDoubles = allTopics.filter((item, _index, arr) => {
  return arr.indexOf(item) === arr.lastIndexOf(item);
});

console.log(uniqueTopics);
console.log(itemsWithoutDoubles);

// Выполнить рефакторинг используя цепочку методов flatMap и filter.
const chainUniqueTopics = courses
  .flatMap(item => item.topics)
  .filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });

console.log(chainUniqueTopics);
