// Экспорт функции, которая определяет, какая тема у пользователя (светлая или темная)
export const detectDarkMode = () => {
  // Если браузер поддерживает matchMedia и тема пользователя темная, то возвращаем dark, иначе light (светлая)
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
