"use strict";

import { horse } from "./horses.js";

export function notifyWhenHorseCrossesFinishLine({ name, racetime }) {
  console.log(`Winner is ${horse.name} with time ${horse.racetime}!`);
}
