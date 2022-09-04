"use strict";

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для
// работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: NaN,
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    transaction.id = this.transactions.length + 1;
    this.balance += amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert("Insufficient Funds!");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    transaction.id = this.transactions.length + 1;
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    alert(`Your balance: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let transactionDetails;
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        transactionDetails = {
          id: transaction.id,
          type: transaction.type,
          amount: transaction.amount,
        };
      }
    }
    return transactionDetails;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        transactionTotal += transaction.amount;
      }
    }
    return transactionTotal;
  },
};

account.deposit(110);
account.deposit(214);
account.deposit(3000);
account.deposit(250);
account.withdraw(112);
account.withdraw(34);
account.withdraw(48);
account.withdraw(512);
account.withdraw(365);
account.deposit(5000);
account.withdraw(3000);
account.withdraw(5000);
console.table(account.transactions);
account.getBalance();
console.table(account.getTransactionDetails(5));
console.log(`Your total transactions of deposit: ${account.getTransactionTotal("deposit")}`);
console.log(`Your total transactions of withdraw: ${account.getTransactionTotal("withdraw")}`);
console.log("Your Balance: ", account.balance);

