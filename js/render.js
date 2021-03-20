import { getPhotoDescriptions } from './data.js';

const imageTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const imageDescriptions = getPhotoDescriptions();

const imagesFragment = document.createDocumentFragment();

imageDescriptions.forEach(({url, likes, comments}) => {
  const imageElement = imageTemplate.cloneNode(true);
  imageElement.querySelector('.picture__img').src = url;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments.length;
  imagesFragment.appendChild(imageElement);
});

pictures.appendChild(imagesFragment);
