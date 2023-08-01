"use strict";

export function notifyWhenRaceFinished(promises) {
  Promise.all(promises)
    .then((results) => {
      console.table(results);
      console.log(`Race finished by all horses - prepare for next round!`);
    })
    .catch((error) => {
      const crashedHorse = error.horse;
      console.log("Some horse crashed: ", crashedHorse);
    })
    .finally(() => {
      console.log(`Thank you for watching the race!`);
    });
}
