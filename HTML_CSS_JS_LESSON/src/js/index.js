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

const picker = datepicker("#date", {
  // Event callbacks.
  onSelect: (instance) => {
    // Show which date was selected.
    console.log(instance.dateSelected);
  },
  onShow: (instance) => {
    console.log("Calendar showing.");
  },
  onHide: (instance) => {
    console.log("Calendar hidden.");
  },
  onMonthChange: (instance) => {
    // Show the month of the selected date.
    console.log(instance.currentMonthName);
  },

  // Customizations.
  formatter: (input, date, instance) => {
    // This will display the date as `1/1/2019`.
    input.value = date.toDateString();
  },
});
