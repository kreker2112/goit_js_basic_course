'use strict';

// Затормаживание ивентов, чтобы чатти-ивенты не спамили лишний раз

window.addEventListener('scroll', _.throttle(onScroll, 500));

function onScroll(){
    console.log('shit');
};

document.querySelector('.input').addEventListener('input', _.debounce(onInput, 300));

function onInput() {
    console.log('input event!' + Date.now());
}
