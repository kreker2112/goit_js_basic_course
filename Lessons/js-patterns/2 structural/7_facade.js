"use strict";

// Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.

class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

// Создаем класс ProductComplaints, который наследуется от Complaints

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

// Создаем класс ServiceComplaints, который наследуется от Complaints

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

// Создаем класс ComplaintRegistry, который является фасадом с методом register, который принимает тип жалобы и возвращает объект этого типа

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    // Если тип жалобы Product, то создаем объект ProductComplaints и присваиваем его переменной complaint

    type === "service"
      ? (complaint = new ServiceComplaints())
      : (complaint = new ProductComplaints());

    // Возвращаем результат вызова метода add у объекта complaint

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register("Vladilen", "service", "недоступен"));
console.log(registry.register("Elena", "product", "вылазит ошибка"));
