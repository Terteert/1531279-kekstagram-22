'use strict';
import { getPhotoDescriptions } from './data.js';
import {renderBigPicture, showItem, bigPicture} from './full-size-render.js'


const imageTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

pictures.addEventListener('click', (evt) => {
  evt.preventDefault();
  let element = evt.target;
  while(evt.currentTarget !== element){
    if (element.dataset.id) {
      showItem(bigPicture);
      renderBigPicture(parseInt(element.dataset.id, 10));
      break
    }
    element = element.parentNode;
  }
});

const imageDescriptions = getPhotoDescriptions();

const imagesFragment = document.createDocumentFragment();

imageDescriptions.forEach(({id, url, likes, comments}) => {
  const imageElement = imageTemplate.cloneNode(true);
  imageElement.querySelector('.picture__img').src = url;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments.length;
  imageElement.querySelector('.picture').setAttribute('data-id', id);
  imageElement.addEventListener('click', () => {
    renderBigPicture();
  })
  imagesFragment.appendChild(imageElement);
});

pictures.appendChild(imagesFragment);

export { imageDescriptions};