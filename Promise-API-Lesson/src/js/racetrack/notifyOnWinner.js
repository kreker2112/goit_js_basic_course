"use strict";

export function notifyOnWinner(promises) {
  Promise.race(promises)
    .then((winner) => {
      console.log(`winner is ${winner.name} with time ${winner.racetime}`);
    })
    .catch((error) => {
      console.log(`${error.horse.name} crashed on ${error.horse.racetime}`);
    });
}
