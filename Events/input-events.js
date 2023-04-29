"use strict";

const input = document.querySelector(".input-events-example > input");
const output = document.querySelector(".input-events-example > .output");

// Focus выполняется при установке кусрора в поле. 
// Его собития не всплывают по иерархии и его нельзя словить выше.
input.addEventListener("focus", (event) => {
  console.log("focus");
});

// Blur выполняется при снятии фокуса
input.addEventListener("blur", (event) => {
  console.log("blur");
});

// Change выполняется после снятия фокуса
input.addEventListener("change", (event) => {
  console.log(event.currentTarget.value);
});

// Input выполнятеся при каждом вводе знака в поле
input.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
});

input.addEventListener("input", handleInputChange);

function handleInputChange(event){
    output.textContent = event.currentTarget.value
}

// Никогда нельзя надеяться на значения в интерфейсе. И все эти значения должны лежать в отдельном месте 
// и записываться в переменные
