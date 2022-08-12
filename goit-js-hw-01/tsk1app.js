'use strict';

const otherName = 'Генератор защитного поля';

let price = 1000;

let message = `Выбран ${otherName}, цена за штуку ${price} кредитов`;

console.log('Цена до повышения: ',message);

price = 2000;

message = `Выбран ${otherName}, цена за штуку ${price} кредитов`;

console.log('Цена после повышения: ',message);