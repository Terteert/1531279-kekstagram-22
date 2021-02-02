const getRandomNumber = function (min, max) {
  if (min >= 0 && max > 0 && min < max) {
    return Math.floor(Math.random() * (max - min)) + min; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  } 
  throw 'некорректное значение';
};
    
getRandomNumber();
    
const acceptCommentLength = function (min, max) {
  if (min > 0 && max <= 140) {
    return true;
  }
  return false;
};
    
acceptCommentLength();