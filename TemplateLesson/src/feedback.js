'use strict';

import debounce from 'lodash.debounce';

const refs = {
  form: document.querySelector('#feedback-form'),
};

const persistedFeedback = localStorage.getItem('feedback-message');

if (persistedFeedback) {
  const textarea = refs.form.elements.message;

  textarea.value = persistedFeedback;
}

// console.log(persistedFeedback);

refs.form.addEventListener(
  'input',
  debounce(e => {
    const textarea = e.target;
    localStorage.setItem('feedback-message', textarea.value);
  }, 1000),
);

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem('feedback-message');
});
