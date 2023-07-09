"use strict";

export const notifyWhenHorseCrashed = (error) => {
  console.log(`${error.horse.name} ${error.errorMessage}`);
};
