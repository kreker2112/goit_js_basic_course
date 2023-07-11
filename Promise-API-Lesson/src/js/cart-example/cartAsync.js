"use strict";

import uniqid from "uniqid";

// Иморт массива items из отдельного файла=============================================

import { items } from "./cart-items";

// Объявление объекта cart=============================================================

export const cart = {
  items,
  add(itemName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = {
          id: uniqid("goods-", "-new"),
          name: itemName,
        };

        this.items.push(item);

        resolve(item);
      }, 300);
    });
  },
  remove(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.items = this.items.filter((item) => item.id !== id);

        resolve(id);
      }, 300);
    });
  },
};
