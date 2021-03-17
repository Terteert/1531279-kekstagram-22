import {GET_RANDOM_NUMBER, MAKE_UNIQUE_RANDOM_NUMBER} from './util.js'

const getUniqueId = MAKE_UNIQUE_RANDOM_NUMBER(1, 25);

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = ['Ян', 'Егор', 'Владислав', 'Иван', 'Билли', 'Рикардо', 'Анастасия', 'Саня', 'Михаил', 'Виктор', 'Вадим', 'Чарльз', 'Наташа', 'Валя', 'Люда', 'Геральт', 'Лютик', 'Эмгыр', 'Лето', 'Золтан', 'Леша', 'Дийкстра', 'Регис', 'Элихаль', 'Джихангир'];

let makeComment = function () {
  let commentator = [];
  for (let i = 1; i <= 3; i++ ) {
    commentator[i] = {
      id: GET_RANDOM_NUMBER(1, 10000),
      avatar: 'img/avatar-' + GET_RANDOM_NUMBER(1, 6) + '.svg',
      message: messages[GET_RANDOM_NUMBER(0, 5)],
      name: names[GET_RANDOM_NUMBER(0, names.length - 1)],
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
      likes: GET_RANDOM_NUMBER(15, 200),
      comments: makeComment(),
    }
  }
  return photoDescriptions
};

export {getPhotoDescriptions};