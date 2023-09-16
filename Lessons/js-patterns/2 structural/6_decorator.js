"use strict";

// Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки».

class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

// Создаем функцию aws, которая принимает объект и добавляет ему новый метод

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };
  return server;
}

// Создаем функцию azure, которая принимает объект и добавляет ему новый метод

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

// Создаем новый объект s1 и применяем к нему функцию aws

const s1 = aws(new Server("12.34.56.78", 8080));

console.log(s1.isAWS);
console.log(s1.awsInfo());

// Создаем новый объект s2 и применяем к нему функцию azure

const s2 = azure(new Server("98.87.74.12", 1000));

console.log(s2.isAzure);
console.log(s2.url);
