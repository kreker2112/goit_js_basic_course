'use strict';

let numberIn;

let total=0;

const alertMessage=('Было введено не число, попробуйте еще раз');

console.log(total);
     
do{
    numberIn=prompt('Введите число');
    numberIn=Number(numberIn);
    const isANmbr=numberIn>=0;
    if(isANmbr!==true){
        alert(alertMessage);
    }else{
        total=total+numberIn;
    }
}while(numberIn!==0);

const sumMsg=(`Общая сумма чисел равна ${total}`);

alert(sumMsg);

console.log(total);