"use strict";

// Объявляем классы, которые будут использоваться в фабрике

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

// Создаем фабрику, которая будет создавать объекты в зависимости от переданного типа

class MemberFactory {
  //   Создаем статическое свойство list, в котором будут храниться типы объектов
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  //   Создаем метод create(), который будет создавать объекты в зависимости от переданного типа

  create(name, type = "simple") {
    //  Проверяем, есть ли в списке типов переданный тип, если нет, то используем тип simple
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    // Создаем объект
    const member = new Membership(name);
    // Добавляем свойства в объект
    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    // Возвращаем объект
    return member;
  }
}

// Создаем экземпляр фабрики и создаем объекты

const factory = new MemberFactory();

// Создаем массив с объектами

const members = [
  factory.create("Vladilen", "simple"),
  factory.create("Elena", "premium"),
  factory.create("Vasilisa", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr"),
];

console.log(members);

// Вызываем метод define() у каждого объекта

members.forEach((m) => m.define());
