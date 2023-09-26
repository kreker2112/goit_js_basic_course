"use strict";

import "./css/styles.css";

import { debounce } from "lodash";

import { getCountries } from "./js/get-countries.js";

getCountries("ukraine").then(console.log).catch(console.warn);
