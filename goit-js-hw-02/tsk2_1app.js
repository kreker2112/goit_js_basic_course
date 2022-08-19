'use strict';

const logItems = function(array){
    console.log(arguments);
    for (let i = 0; i < arguments.length; i += 1) {
        console.log(arguments[0]);
       
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

