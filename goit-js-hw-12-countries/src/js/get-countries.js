"use strict";

import axios from "axios";

axios.defaults.baseURL = "https://restcountries.com/v3.1/";

const fields = "?fields=name,capital,population,flag,languages";

export async function getCountries(name) {
  const country = await axios.get(`name/${name}${fields}`);

  return country;
}
