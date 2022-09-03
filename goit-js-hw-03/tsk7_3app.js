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
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    return {
      id: NaN,
      type,
      amount,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    transaction.id = this.transactions.length + 1;
    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount >= this.balance) {
      alert("Insufficient Funds!");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    transaction.id = this.transactions.length + 1;
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    alert(`Your balance: ${this.balance}`);
  },

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
console.table(account.transactions);
account.getBalance();
console.table(account.getTransactionDetails(5));
console.log(`Your total transactions of deposit: ${account.getTransactionTotal("deposit")}`);
console.log(`Your total transactions of withdraw: ${account.getTransactionTotal("withdraw")}`);
console.log("Your Balance: ", account.balance);

