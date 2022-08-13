"use strict";

const adminPassword = "jqueryismyjam";

let message;

const authorization = prompt("Enter password");

if (authorization === null) {
  message = "Declined by user!";
} else if (authorization === adminPassword) {
  message = "Welcome!";
} else if (authorization !== adminPassword) {
  message = "Wrong password. Access denied!";
}

alert(message);





// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

//   - Если нажали Cancel, записать в message строку 'Отменено пользователем!'
//   - В противном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
//   - В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.