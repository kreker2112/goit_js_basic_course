"use strict";

// Импорт массива horses из отдельного файла================================================

import { horse } from "./horses.js";

export const race = (horse) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const crashed = Math.random() > 0.5;
      crashed ? reject({ horse, errorMessage: "Crashed" }) : resolve(horse);
    }, horse.racetime);
  });
};
