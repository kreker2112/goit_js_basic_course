'use strict';

// Принимает ключ `key` по которому будет произведена выборка.
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.log('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log('Set state error: ', err);
  }
};

// Принимает ключ `key` по которому будет произведена выборка и удаление.

const remove = key => {
  try {
    const serializedState = localStorage.removeItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.log('Get state error: ', err);
  }
};

export default { load, save, remove };
