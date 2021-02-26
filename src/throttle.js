const throttle = (callback, ms) => {
  let currentArgs = [];
  let lastCall = -Infinity;
  let timer = null;

  const throttled = (...args) => {
    const now = Date.now(); // создаем временную метку
    currentArgs = args; // сохраняем последние аргументы как актуальные
    clearTimeout(timer); // чистим старый таймаут

    // если с последнего вызова прошло не меньше, чем ms
    if (now - lastCall >= ms) {
      // вызываем оригинальную функцию
      callback(...currentArgs);
      // перезаписываем время последнего вызова
      lastCall = now;
    } else {
      // здесь прошло времени меньше, чем ms
      const timeout = lastCall + ms - now;
      // поэтому планруем новый вызов через timeout
      timer = setTimeout(() => throttled(...currentArgs), timeout);
    }
  };

  return throttled;
};

export default throttle;
