'use strict';

// Определение класса узла списка
class Node {
    constructor(image) {
      this.image = image;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Определение класса двусвязного списка
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.current = null; // Текущий показываемый узел
    }
  
    // Метод для добавления нового узла в конец списка
    append(image) {
      const newNode = new Node(image);
  
      if (!this.head) {
        // Если список пуст, новый узел становится головой и хвостом
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Если список не пуст, добавляем новый узел в конец и обновляем хвост
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      // Если текущий показываемый узел не установлен, делаем новый узел текущим
      if (!this.current) {
        this.current = newNode;
      }
    }
  
    // Метод для перемещения на следующий узел в списке
    next() {
      if (this.current && this.current.next) {
        this.current = this.current.next;
      }
    }
  
    // Метод для перемещения на предыдущий узел в списке
    previous() {
      if (this.current && this.current.prev) {
        this.current = this.current.prev;
      }
    }
  
    // Метод для получения текущего показываемого изображения
    getCurrentImage() {
      if (this.current) {
        return this.current.image;
      }
      return null;
    }
  }
  
  // Создание экземпляра двусвязного списка
  const gallery = new DoublyLinkedList();
  
  // Массив изображений
  const images = [
    { url: 'image1.jpg', alt: 'Image 1' },
    { url: 'image2.jpg', alt: 'Image 2' },
    { url: 'image3.jpg', alt: 'Image 3' },
    { url: 'image4.jpg', alt: 'Image 4' },
  ];
  
  // Добавление изображений в галерею
  images.forEach((image) => {
    gallery.append(image);
  });
  
  // Функция для обработки события нажатия клавиш
  function handleKeyPress(event) {
    if (event.keyCode === 37) {
      // Стрелка влево
      gallery.previous();
    } else if (event.keyCode === 39) {
      // Стрелка вправо
      gallery.next();
    }
  
    // Обновление текущего изображения на странице
    const currentImage = gallery.getCurrentImage();
    if (currentImage) {
      // Обновление изображения на странице
      const imgElement = document.getElementById('gallery-image');
      imgElement.src = currentImage.url;
      imgElement.alt = currentImage.alt;
    }
  }
  
  // Добавление обработчика событий нажатия клавиш
  document.addEventListener('keydown', handleKeyPress);
  
  // Инициализация первого изображения на странице
  const initialImage = gallery.getCurrentImage();
  if (initialImage) {
    const imgElement = document.createElement('img');
    imgElement.id = 'gallery-image';
    imgElement.src = initialImage.url;
    imgElement.alt = initialImage.alt;
    document.body.appendChild(imgElement);
  }
  