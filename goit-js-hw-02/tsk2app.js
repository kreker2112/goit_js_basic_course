'use strict';

const total = 100;

let ordered = prompt('Введите количество товара');

console.log('Заказано до приведения к числу: ',ordered);

console.log('Тип Заказаного до приведения к числу: ',typeof ordered);

ordered = Number(ordered);

console.log('Заказано после приведения к числу: ',typeof ordered);

const isOrderedANmbr=ordered>=0;

console.log('Является ли введенная информация числом: ',isOrderedANmbr);

if(isOrderedANmbr===false){
    ordered = prompt('Введено неверные данные, введите, пожалуйста, количество товара');
    ordered = Number(ordered);
}

const apprvMsg = ('Заказ оформлен, с вами свяжется менеджер');

const flsMsg = ('На данный момент мы не имеем такого количества данного товара. Можете оставить заявку для бронирования при ближайшей поставке');

const cnclMsg = ('Заказ отменён!');

const min = 1;

const max = total;

console.log('Заказано после приведения к числу: ',typeof ordered);

const isOrderedInRange = ordered > min && ordered <max;

console.log( 'Заказ в пределах остатков: ', isOrderedInRange);

if (ordered===0){
    alert (cnclMsg);
}else if (isOrderedInRange===false) {
    alert (flsMsg);
}else if (isOrderedInRange===true){
    confirm(apprvMsg);
}
console.log( 'Заказано: ',ordered);
