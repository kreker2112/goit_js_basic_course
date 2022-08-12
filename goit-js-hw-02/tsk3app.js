'use strict';

const adminPassword = 'jqueryismyjam';

let message;

const authorization = prompt ('Enter password')

if (authorization===null){
    message = ('Declined by user!');
}else if (authorization===adminPassword){
    message = ('Welcome!');
}else if (authorization!==adminPassword){
message = ('Wrong password. Access denied!');
}

alert(message);