"use strict";

// Обїявление функции ленивой загрузки:
export const lazyLoad = (target) => {
  // Настройки для IntersectionObserver:
  const options = {
    // При пересечении 10px нижней границы вьюпорта с таргетом:
    rootMargin: "200px 0px",
    // При пересечении 1px таргета с вьюпортом:
    threshold: 1,
  };

  // Создание экземпляра IntersectionObserver:
  const intObserv = new IntersectionObserver(
    (entries, observer) => {
      // Перебор массива entries:
      entries.forEach((entry) => {
        // Проверка на пересечение:
        if (entry.isIntersecting) {
          // Запись ссылки на таргет в переменную:
          const img = entry.target;
          // Запись ссылки на изображение таргета по дата-атрибуту в переменную:
          const imageUrl = img.dataset.lazy;

          // Установка значения атрибута src таргета:
          img.setAttribute("src", imageUrl);
          // Добавление класса fade-in таргету:
          img.classList.add("fade-in");
          // Отключение наблюдателя за таргетом (т.к. изображение уже загружено):
          observer.disconnect();
        }
      });
    },
    // Передача настроек в качестве аргумента:
    options
  );

  // Передача таргета в качестве аргумента в метод observe:
  intObserv.observe(target);
};
