import { useState, useEffect } from "react";

// Определение начального значения из localStorage или defaultValue (если его нет) и запись в localStorage
function getLocalStorage(key, defaultValue) {
  // Получение значения из localStorage по ключу
  const saved = localStorage.getItem(key);
  // Если значение есть, то парсим его и возвращаем
  const initial = JSON.parse(saved);
  // Если значение есть, то возвращаем его, если нет, то возвращаем defaultValue
  return initial || defaultValue;
}

// Хук для работы с localStorage
export const useLocalStorage = (key, defaultValue) => {
  // Инициализация состояния с помощью useState и передача в качестве начального значения функцию getLocalStorage
  // и ключ и значение по умолчанию (если его нет)
  const [value, setValue] = useState(() => {
    // При инициализации состояния, вызываем функцию getLocalStorage и передаем ей ключ и значение по умолчанию
    return getLocalStorage(key, defaultValue);
  });

  // При изменении состояния, записываем его в localStorage с помощью useEffect и передаем в массив зависимостей key и value
  useEffect(
    () => {
      // Запись в localStorage по ключу значения value в виде строки
      localStorage.setItem(key, JSON.stringify(value));
    },
    // При изменении состояния, записываем его в localStorage с помощью useEffect и передаем в массив зависимостей key и value
    [key, value]
  );

  // возращаем массив состоящий из значения и функции для его изменения
  return [value, setValue];
};
