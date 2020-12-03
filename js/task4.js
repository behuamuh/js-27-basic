// Пример 4 - с помощью метода split() и метода join() 
// напишите функцию snakeToCamelCase(word)
// которая принимает имя переменной в 
// формате snake_case и возвращает новое имя, 
// в формате camelCase

const variableName = 'this_is_some_variable_name';

const capitalize = (word) => {
  const letters = word.split('');

  letters[0] = letters[0].toUpperCase();

  return letters.join('');
};

const snakeToCamelCase = (word) => {
  const parts = word.split('_');

  for (let i = 1; i < parts.length; i++) {
    parts[i] = capitalize(parts[i]);
  }
  
  return parts.join('');
};

console.log(variableName);
console.log(snakeToCamelCase(variableName));