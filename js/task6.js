// Пример 6 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = name => {
  if (courses.includes(name)) return;

  courses.push(name);
};

const removeCourse = name => {
  const removedIndex = courses.indexOf(name);

  if (removedIndex === -1) return;

  courses.splice(removedIndex, 1);
};

const updateCourse = (oldName, newName) => {
  const replacedIndex = courses.indexOf(oldName);

  if (replacedIndex === -1) return;

  courses.splice(replacedIndex, 1, newName);
};

addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
console.log(courses);
addCourse('CSS'); // 'У вас уже есть такое курс'
console.log(courses);
removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
console.log(courses);
removeCourse('Vue'); // 'Курс с таким имененем не найден'
console.log(courses);
updateCourse('Express', 'NestJS'); // ['HTML', 'CSSconsole.log(courses);
console.log(courses);
