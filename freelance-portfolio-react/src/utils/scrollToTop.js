import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Экспортируем функцию, которая при переходе на новую страницу будет перемещать пользователя в начало страницы (вверх)
export default function ScrollToTop() {
  // Получаем текущий путь (URL) страницы с помощью хука useLocation
  const { pathname } = useLocation();

  // При изменении пути (URL) страницы перемещаем пользователя в начало страницы (вверх) с помощью хука useEffect
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    // Записываем в массив зависимостей путь (URL) страницы (pathname) для того, чтобы useEffect
    // срабатывал только при изменении пути (URL) страницы
    [pathname]
  );
  // Возвращаем null (ничего) так как нам не нужно ничего рендерить в этом компоненте
  return null;
}
