"use strict";

// https://pixabay.com/api/?key=39315149-fad4768c6404d095435b55e12&q=yellow+flowers&image_type=photo&orientation=horizontal&page=1&per_page=12

import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/";

const key = "39315149-fad4768c6404d095435b55e12";

const imageType = `&image_type=photo`;

const orientation = `&orientation=horizontal`;

const page = "&page=1";

const perPage = "&per_page=40";

export async function getImages(searchInput) {
  const imageLoad = await axios.get(
    `api/?key=${key}&q=${searchInput}${imageType}${orientation}${page}${perPage}`
  );

  return imageLoad;
}
