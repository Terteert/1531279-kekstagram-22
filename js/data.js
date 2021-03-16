import {getRandomNumber, makeUniqueRandomNumber} from './util.js'

const getUniqueId = makeUniqueRandomNumber(1, 25);

let messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
let names = ['Ян', 'Егор', 'Владислав', 'Иван', 'Билли', 'Рикардо', 'Анастасия', 'Саня', 'Михаил', 'Виктор', 'Вадим', 'Чарльз', 'Наташа', 'Валя', 'Люда', 'Геральт', 'Лютик', 'Эмгыр', 'Лето', 'Золтан', 'Леша', 'Дийкстра', 'Регис', 'Элихаль', 'Джихангир'];

let makeComment = function () {
  let commentator = [];
  for (let i = 1; i <= 3; i++ ) {
    commentator[i] = {
      id: getRandomNumber(1, 10000),
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: messages[getRandomNumber(0, 5)],
      name: names[getRandomNumber(0, names.length - 1)],
    }
  }
}

let getPhotoDescriptions = function () {
  let photoDescriptions = [];
  for (let i = 1; i <= 25; i++) {
    photoDescriptions[i] = {
      id: getUniqueId(),
      url: 'photos/' + i + '.jpg',
      description: 'описание',
      likes: getRandomNumber(15, 200),
      comments: makeComment(),
    }
  }
  return photoDescriptions
};

export {getPhotoDescriptions};