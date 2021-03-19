import {getRandomNumber, makeUniqueRandomNumber} from './util.js';

const getUniqueId = makeUniqueRandomNumber(1, 25);

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Ян', 'Егор', 'Владислав', 'Иван', 'Билли', 'Рикардо', 'Анастасия', 'Саня', 'Михаил', 'Виктор', 'Вадим', 'Чарльз', 'Наташа', 'Валя', 'Люда', 'Геральт', 'Лютик', 'Эмгыр', 'Лето', 'Золтан', 'Леша', 'Дийкстра', 'Регис', 'Элихаль', 'Джихангир'];

const makeComment = function () {
  const commentator = [];
  for (let i = 1; i <= 3; i++ ) {
    commentator.push({
      id: getRandomNumber(1, 10000),
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: MESSAGES[getRandomNumber(0, 5)],
      name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    });
  }
  return commentator
}

const getPhotoDescriptions = function () {
  const photoDescriptions = [];
  for (let i = 1; i <= 25; i++) {
    photoDescriptions.push({
      id: i/*getUniqueId()*/,
      url: 'photos/' + i + '.jpg',
      description: 'описание',
      likes: getRandomNumber(15, 200),
      comments: makeComment(),
    });
  }
  return photoDescriptions
};

export {getPhotoDescriptions};
