'use strict';

// Import of Array of Posts

import { postsArray } from './posts-generator';
console.log(postsArray);

// Import CSS styles

import './css/styles.css';
import './css/post-feed.css';

// Reference to html tag

const refs = {
  postFeed: document.querySelector('.post-feed'),
};

// Make PostsFeed by post-feed-item.hbs (один шаблон - одна сущность) - так правильнее

import postFeedItemTemplate from './templates/post-feed-item.hbs';

console.log(postFeedItemTemplate);

function buildPostsFeed() {
  const markup = postsArray.map(post => postFeedItemTemplate(post)).join('');

  console.log(markup);

  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}

buildPostsFeed(postsArray);

// Make PostsFeed by post-feed.hbs (один шаблон - все сущности)

// import postFeedTemplate from './templates/post-feed.hbs';

// const markupSecondType = postFeedTemplate(postsArray);

// console.log(markupSecondType);

// refs.postFeed.insertAdjacentHTML('beforeend', markupSecondType);

// У метода JSON есть два метода:
// 1) JSON.stringify(), который переводит объект в строку для хранения данных и отправки их в бэкэнд
// 2) JSON.parse(), который возвращает строку из бэкэнда из переводит ее обратно в объект
