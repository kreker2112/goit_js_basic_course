"use strict";

import transactionHistory from "./transaction-history.js";

console.log(transactionHistory);

const table = document.querySelector('.transaction-table');

const markup = createTableRows(transactionHistory);

table.insertAdjacentHTML("afterbegin", markup);

console.log(table);

function createTableRows(transactions) {
  // Возврат массива
    return transactions
      .map(transaction => createTableRowMarcup(transaction))
      .join("");
  // Возврат строки
//   return transactions.reduce(
//     (markup, transaction) => (markup += createTableRowMarcup(transaction)),
//     ""
//   );
}
function createTableRowMarcup({ type, amount, date, business }) {
  const row = `
<tr>
    <td>${type}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
</tr>
`;

  return row;
}
