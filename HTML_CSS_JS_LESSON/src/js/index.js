"use strict";

// Импорт стилей из отдельного файла======================================================

import "./../css/main.css";

import "./../css/custom-select.css";

// Импорт библиотеки customSelect для кастомизации select===============================

import customSelect from "custom-select";

// Вызов функции customSelect===========================================================

customSelect("select");

// Импорт библиотеки autoComplete для автозаполнения=====================================

import autoComplete from "@tarekraafat/autocomplete.js";

// Импорт массива стран из отдельного файла===============================================

import { countryList } from "./country-list";

// Импорт стилей autoComplete из отдельного файла======================================================

import "./../../node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.01.css";

// Инициализация библиотеки autoComplete=================================================

const autoCompleteJS = new autoComplete({
  selector: "#location",
  placeHolder: "Country name...",
  data: {
    src: countryList,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
  resultList: {
    maxResults: 15,
  },
  searchEngine: "strict",
});

// Импорт библиотеки datepicker для выбора даты==========================================

const datepicker = require("js-datepicker");

const picker = datepicker("#date");
