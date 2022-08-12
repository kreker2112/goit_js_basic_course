'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let ordrDrdQntty = prompt('Введите количество дроидов');

ordrDrdQntty = Number(ordrDrdQntty);

const isOrdrQnttyANmbr=ordrDrdQntty>=0;

console.log('Введено в промпт: ', isOrdrQnttyANmbr);

if(isOrdrQnttyANmbr===false){
    ordrDrdQntty = prompt('Введено неверные данные, введите, пожалуйста, количество дроидов');
    ordrDrdQntty = Number(ordrDrdQntty);
}

const cnclMsg = ('Cancelled by user!');

const ttlPrice = pricePerDroid*ordrDrdQntty;;

const isOrderedInRange = ttlPrice < credits;

const insffcntFnds = ('Недостаточно средств на счету!');

const cashBlnc = credits - ttlPrice;

const apprvMsg = `Вы купили ${ordrDrdQntty} дроидов, на счету осталось ${cashBlnc} кредитов. `;

console.log('Заказано дроидов:', ordrDrdQntty);

console.log('Сумма заказа:', ttlPrice);

console.log('Хватает ли денег на счету:', isOrderedInRange);

if (ordrDrdQntty===0){
    alert (cnclMsg);
}else if (isOrderedInRange===false) {
    alert (insffcntFnds);
}else if (isOrderedInRange===true) {
    confirm (apprvMsg);
}

console.log('Остаток денег на счету:', cashBlnc);