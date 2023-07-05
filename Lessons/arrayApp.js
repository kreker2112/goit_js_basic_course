"use strict";

// Переопределение элементов массива: 

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]
// ====================================================================
// Операции с длиной массива:
// ==================================
// Опреление длины массива:

// const clients = ['Mango', 'Poly', 'Ajax'];

// // length вернет текущую длину массива
// console.log(clients.length); // 3
// ===================================

// Если установить для свойства length значение, превышающее количество элементов в массиве, 
// новые элементы будут добавлены с начальными значениями undefined.
// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined
// ====================================
// Если задать длину массива меньше чем текущее кол-во элементов в массиве то все "не влезшие" 
// элементы в новую длину просто удаляются.
// clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]
// ====================================================================
// Перебор массива:

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }
// =====================================================================
// Перебор массива без счетчика:
// 
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }
// ======================================================================
// Перебор по строке:
// 
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// =======================================================================
//  Заполнение пустого массива: 

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// ==========================================================================
// Перебор массива с прерыванием:

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// =============================================================================
// Перебор массива с порогом и функцией continue:

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// ===============================================================================
// Матрицы:

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   console.log(matrix[0][0]); // 1
//   console.log(matrix[1][2]); // 6
//   console.log(matrix[2][2]); // 9
// ================================================================================
// Перебор массива с помощью вложенного цикла:

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   let total = 0;
  
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log(`Подмассив матрицы matrix ${[i]}: `, matrix[i]);
  
//     for (let j = 0; j < matrix[i].length; j += 1) {
//       console.log(`Элемент подмассива матрицы matrix ${[i]}${[j]}: `, matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
  
//   console.log(total); // 45

function countBy(x, n) {
    let z = [];
  for ( let i = x; z.length < n ; i += x ){
    z.push(i);
  }
    return z;
  }