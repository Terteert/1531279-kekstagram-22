'use strict';

import {imageDescriptions} from './render.js'


const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsBlock = document.querySelector('.social__comments');
const bigPictureImageBlock = document.querySelector('.big-picture__img');
const bigPictureImage = bigPictureImageBlock.querySelector('img')
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const bigPictureDescription = document.querySelector('.social__caption');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const likesBlock = document.querySelector('.social__likes');

const showItem = function (item) {
  return item.classList.remove('hidden');
};

const hideItem = function (item) {
  return item.classList.add('hidden');
};

const createComment = function (comment) {
  let commentNode = document.createElement('li');
  commentNode.classList.add('social__comment');
  let img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name; 
  img.width = 35;
  img.height = 35;
  commentNode.appendChild(img);
  let paragraph = document.createElement('p');
  paragraph.classList.add('social__text');
  paragraph.textContent = comment.message;
  commentNode.appendChild(paragraph);
  return commentNode;
};

const createComments = function (comments, commentsBlock) {
  comments.forEach((it) => {
    commentsBlock.appendChild(createComment(it));
  });
};

const renderBigPicture = function (id) {
  body.classList.add('modal-open');
  const imageData = imageDescriptions.find((it) => it.id === id);
  hideItem(commentCount);
  hideItem(commentsLoader);
  if (imageData) {
    likesBlock.onclick = function () {
      likesCount.textContent++;
    };/* про то что лайки можно будет убрать не написано */
    bigPictureImage.src = imageData.url;
    likesCount.textContent = imageData.likes;
    commentsCount.textContent = imageData.comments.length;
    createComments(imageData.comments, commentsBlock);
    bigPictureDescription.textContent = imageData.description;
  }
};

bigPictureButtonClose.addEventListener('click', () => {
  hideItem(bigPicture);
  commentsBlock.innerHTML = '';
  body.classList.remove('modal-open');
})

export {renderBigPicture, showItem, bigPicture};