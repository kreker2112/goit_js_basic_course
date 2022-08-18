'use strict';

const logItems = function(){
    // const args = array.from(arguments);
    for(const arg of arguments){
        console.log('arg: [i] ', arg[0]);
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// hello