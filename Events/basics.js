"use strict";

const loginButton = document.querySelector('button[data-action="login"]');

loginButton.addEventListener("click", (event) => {
  // Таргет, на котором произошло событие:
  console.log("target: ", event.target);
  // Таргет, на котором висит слушатель событий
  console.log("currentTarget: ", event.currentTarget);
  // Обращение к элементу, на котором висит слушатель событий:
  console.log('currentTarget.textContent: ', event.currentTarget.textContent);
//   Если коллбек функция не стрелочная, то this = currentTarget
});

// Проблема this: если в обработчик слушателя передается метод объекта, то надо привязывать
// контекст: 

const obj1 = {
    x: 5,
    showX(){
        console.log('before bind: ', this);
        console.log('before bind: ', this.x);
    }
};

loginButton.addEventListener("click", obj1.showX);

const obj2 = {
    x: 5,
    showX(){
        console.log('after bind: ',this);
        console.log('after bind: ',this.x);
    }
};

loginButton.addEventListener("click", obj2.showX.bind(obj2));
