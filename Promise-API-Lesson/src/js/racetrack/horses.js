"use strict";

// Импорт рандомизатора целых чисел из отдельного файла=====================================

import { randomIntegerFromInterval } from "./random-integer.js";

export const horse = {
  name: "Mango",
  racetime: randomIntegerFromInterval(1000, 3000),
};
