const randomNumber = function (min, max) {
  if (min < 0 || max < 0 || min > max) {
    return 'некорректное значение';
  } 
  return Math.floor(Math.random() * (max - min)) + min; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};
    
randomNumber();
    
const commentLength = function (min, max) {
  if (min > 0 && max <= 140) {
    return 'true';
  }
  return 'false';
};
    
commentLength();