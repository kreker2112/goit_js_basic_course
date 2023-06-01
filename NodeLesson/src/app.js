"use strict";

const shortid = require("shortid");

console.log("shortId: ", shortid.generate());

const a = 5;

console.log("result: ", a + 10);

const add = (a, b) => a + b;

console.log(add(2, 3));

class Car {
  constructor(value = 100) {
    this.value = value;
  }

  showValue() {
    console.log("Car value: ", this.value);
  }
}

const mustang = new Car(10000);
