const debounce = (callback, ms) => {
  // Создаем замыкание с таймером
  let timer = null;

  const debounced = (...args) => {
    // При вызове нашей обернутой функции проверяем
    // если таймер не налл, значит интервал еще не прошел
    // и прошлый вызов надо отменить
    if (timer) {
      clearTimeout(timer);
    }

    // планируем новый вызов через интервал
    timer = setTimeout(() => {
      // вызываем оригинальную функцию
      callback(...args);
      // сбрасываем таймер, т.к. функция уже выполнена
      timer = null;
    }, ms);
  };

  return debounced;
};

export default debounce;
