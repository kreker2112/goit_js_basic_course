"use strict";

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// ======================================================================================================

class CountdownTimer {
  // Объект ссылок на элементы интерфейса таймера (публичный)
  refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
  };
  //   Объявление конструктора класса таймера (публичный)
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  //   Метод запуска таймера (публичный)
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockface(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.start);
  }
  //   Методы для работы с таймером (приватные)
  //   Метод добавления нуля к числу меньше 10 (приватный)
  pad(value) {
    return String(value).padStart(2, "0");
  }
  //   Метод получения компонентов времени (приватный)
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  //   Метод обновления интерфейса таймера (приватный)
  updateClockface({ days, hours, mins, secs }) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

// ======================================================================================================

// Создание экземпляра класса таймера с передачей параметров (публичный)
// const timer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Sep 26, 2023"),
// });

// Запуск таймера (публичный)

// timer.start();

// ======================================================================================================

const dateChoose = document.querySelector("#date");

const startBtn = document.querySelector(".start-button");

const stopBtn = document.querySelector(".stop-button");

console.dir(dateChoose);

startBtn.addEventListener("click", () => {
  const date = dateChoose.value;
  console.log(date);
  const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date(date),
  });
  timer.start();
});

stopBtn.addEventListener("click", () => {
  timer.stop();
});
