"use strict";

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
  book.rating = 9;
  book.isPublic = false;
  book.genres.push("драма");
  
  console.log(book.rating); // 9
  console.log(book.isPublic); // false
  console.log(book.genres); // ['historical prose', 'adventures', 'драма']