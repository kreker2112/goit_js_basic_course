"use strict";

import { race } from "./racetrack.js";
// Импорт рандомизатора целых чисел из отдельного файла=====================================

import { randomIntegerFromInterval } from "./random-integer.js";

// Экспорт объекта horse=====================================================================

export const horse = {
  name: "Mango",
  racetime: randomIntegerFromInterval(1000, 3000),
};

// Экспорт массива объектов лошадей==================================================================

export const horses = ["Bilbo", "Marry", "Sam", "Carrot", "Frodo"].map(
  (name) => ({ name, racetime: randomIntegerFromInterval(2000, 5000) })
);
