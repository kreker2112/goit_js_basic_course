"use strict";

// Паттерн Mediator представляет собой объект (или класс), который инкапсулирует в себе способ взаимодействия множества объектов.

class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

// Создаем класс ChatRoom, который будет являться посредником между пользователями

class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const vlad = new User("Vlad");
const lena = new User("Elena");
const igor = new User("Igor");

const room = new ChatRoom();

room.register(vlad);
room.register(lena);
room.register(igor);

vlad.send("Hello!", lena);
lena.send("Hello hello!", vlad);
igor.send("Vsem privet!");
