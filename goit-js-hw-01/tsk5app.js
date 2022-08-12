'use strict';

let cost;

let countryOfOrder=prompt('Введите страну доставки');

const flsMsg=('В вашей стране доставка недоступна');

const cnclMsg=('Заказ на доставку отменен!')

console.log('Введено: ',countryOfOrder);

if (countryOfOrder===null){
 alert(cnclMsg);
}else{
    switch (countryOfOrder.toLowerCase()){
        case 'китай':
            cost = 100;
            break;
    
        case 'чили':
            cost = 250;
            break; 
        case 'австралия':
            cost = 170;
            break;
        
        case 'ямайка':
            cost = 120;
            break;  
    
        default:
            alert(flsMsg);
    }
}

console.log(cost);

if(cost!==undefined){
    const apprvMsg=(`Доставка в ${countryOfOrder.toUpperCase()} будет стоить ${cost} кредитов`);

    confirm(apprvMsg);
}