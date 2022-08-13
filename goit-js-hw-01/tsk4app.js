"use strict";

const clientCredits = 23580;

const pricePerDroid = 3000;

let orderDroidQuantity = prompt("Введите количество дроидов");

orderDroidQuantity = Number(orderDroidQuantity);

const isOrderQuantityACorrectNumber = orderDroidQuantity >= 0;

const cancelMessage = "Cancelled by user!";

const totalPrice = pricePerDroid * orderDroidQuantity;

const isOrderedInRange = totalPrice < clientCredits;

const insufficientFunds = "Недостаточно средств на счету!";

const cashBalance = clientCredits - totalPrice;

const approveMessage = `Вы купили ${orderDroidQuantity} дроидов, на счету осталось ${cashBalance} кредитов. `;

console.log("Заказано дроидов:", orderDroidQuantity);

console.log("Сумма заказа:", totalPrice);

console.log("Хватает ли денег на счету:", isOrderedInRange);

console.log("Введено в промпт корректное значение: ", isOrderQuantityACorrectNumber);

if (isOrderQuantityACorrectNumber === false) {
    orderDroidQuantity = prompt(
    "Введено неверные данные, введите, пожалуйста, количество дроидов"
  );
  orderDroidQuantity = Number(orderDroidQuantity);
}



if (orderDroidQuantity === 0) {
  alert(cancelMessage);
} else if (isOrderedInRange === false) {
  alert(insufficientFunds);
} else if (isOrderedInRange === true) {
  confirm(approveMessage);
}

console.log("Остаток денег на счету:", cashBalance);




// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). 
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. 
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

//  При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и 
// сохранить в переменную.

// Напиши скрипт который:

//  - Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
//  - В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//  - Проверяет сможет ли пользователь оплатить заказ:
//      - если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
//      - в противном случае необходимо посчитать остаток кредитов на счету и 
//        вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.