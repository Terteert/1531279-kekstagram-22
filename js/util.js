const MAKE_UNIQUE_RANDOM_NUMBER = (min, max) => {
  const previousValues = [];
  
  return () => {
    let currentValue = Math.floor(Math.random() * (max - min + 1)) + min;
    if (previousValues.length >= (max - min + 1)) {
      throw ('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const GET_RANDOM_NUMBER = function ( min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CHECK_COMMENT_LENGTH = function (min, max) {
  if (min > 0 && max <= 140) {
    return true;
  }
  return false;
};

export {MAKE_UNIQUE_RANDOM_NUMBER, GET_RANDOM_NUMBER, CHECK_COMMENT_LENGTH};