"use strict";

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputLine = document.getElementById("font-size-control");

const spanText = document.getElementById("text");

function sizeChange (event) {
    spanText.style.fontSize = event.currentTarget.value + "px";
}

inputLine.addEventListener('input', sizeChange);
