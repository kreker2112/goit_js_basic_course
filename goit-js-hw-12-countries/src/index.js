"use strict";

import "./css/styles.css";

import { debounce } from "lodash";

import Notiflix from "notiflix";

import { getCountries } from "./js/get-countries.js";

import countryInfoList from "./templates/country-info-list.hbs";

import countryListItems from "./templates/country-list-item.hbs";

const refs = {
  input: document.getElementById("search-box"),
  countryList: document.querySelector(".country-list"),
  countryInfo: document.querySelector(".country-info"),
};

const inputValue = refs.input.value;

function inputUpdate(inputValue) {
  const inputstring = inputValue.target.value.trim();
  if (!inputstring) {
    return;
  }
  getCountries(inputstring)
    .then((countries) => {
      const countriesArr = countries.data;
      console.log(countriesArr);
      let languages;
      countriesArr.forEach((value) => {
        for (const language in value.languages) {
          languages = Object.values(value.languages).join(", ");
        }
      });
      if (countriesArr.length === 1) {
        clearCountries();
        refs.countryList.insertAdjacentHTML(
          "beforeend",
          renderCountryList(countriesArr)
        );
        refs.countryInfo.insertAdjacentHTML(
          "beforeend",
          renderCountryInfo(countriesArr)
        );
        renderLanguagesEl(languages);
      } else if (countriesArr.length > 10) {
        alertTooManyMatches();
      } else {
        clearCountries();
        refs.countryList.insertAdjacentHTML(
          "beforeend",
          renderCountryList(countriesArr)
        );
      }
    })
    .catch(alertWrongName);
}

function renderCountryList(countriesArr) {
  const markup = countriesArr
    .map((country) => countryListItems(country))
    .join("");
  return markup;
}

function renderCountryInfo(countriesArr) {
  const markup = countriesArr
    .map((country) => countryInfoList(country))
    .join("");
  return markup;
}

function alertWrongName() {
  Notiflix.Notify.failure("Oops, there is no country with that name");
}

function alertTooManyMatches() {
  Notiflix.Notify.info(
    "Too many matches found. Please enter a more specific name."
  );
}

function clearCountries() {
  refs.countryList.innerHTML = "";
  refs.countryInfo.innerHTML = "";
}

function renderLanguagesEl(languages) {
  const infoListEl = document.querySelector(".country-info__list");
  infoListEl.insertAdjacentHTML(
    "beforeend",
    `<li class="country-info__item">
            <p>
              <b>Languages: </b>${languages}
            </p>
          </li>`
  );
}

document.addEventListener("input", _.debounce(inputUpdate, 300));
