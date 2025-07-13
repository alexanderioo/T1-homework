import { useState, useEffect } from "react";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./router";

import "./App.css";

import reactLogo from "./assets/react.svg";
import { T, Link } from "@admiral-ds/react-ui";
import Header from "./components/Header";

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

import { LIGHT_THEME, DARK_THEME } from "@admiral-ds/react-ui";
import { ThemeProvider } from "styled-components";
import { DropdownProvider } from "@admiral-ds/react-ui";
import { FontsVTBGroup } from "@admiral-ds/react-ui";
import { TaskProvider } from "./context/TaskContext";
import TaskListPage from "./pages/TaskListPage";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>("light");
  const [language, setLanguage] = useState<'ru' | 'en'>("ru");
  const admiralTheme = theme === "light" ? LIGHT_THEME : DARK_THEME;

  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));
  const toggleLanguage = () => setLanguage(l => (l === "ru" ? "en" : "ru"));

  // Словарь для мультиязычности
  const dict = {
    ru: {
      searchPlaceholder: "Поиск задач...",
      shortcut: "⌘K",
      restore: "ВОССТАНОВИТЬ",
      deleteAll: "УДАЛИТЬ ВСЕ ЗАДАЧИ",
      add: "ДОБАВИТЬ ЗАДАЧУ",
      search: "Поиск по названию...",
      status: "Статус",
      category: "Категория",
      priority: "Приоритет",
      statusTodo: "Ожидает",
      statusInProgress: "В работе",
      statusDone: "Выполнено",
      categoryBug: "Баг",
      categoryFeature: "Функция",
      categoryDocumentation: "Документация",
      categoryRefactor: "Рефакторинг",
      categoryTest: "Тест",
      priorityLow: "Низкий",
      priorityMedium: "Средний",
      priorityHigh: "Высокий",
      title: "Менеджер задач",
      dateLabel: "Дата",
    },
    en: {
      searchPlaceholder: "Search tasks...",
      shortcut: "⌘K",
      restore: "RESTORE DEMO TASKS",
      deleteAll: "DELETE ALL TASKS",
      add: "+ ADD TASK",
      search: "Search by title...",
      status: "Status",
      category: "Category",
      priority: "Priority",
      statusTodo: "To Do",
      statusInProgress: "In Progress",
      statusDone: "Done",
      categoryBug: "Bug",
      categoryFeature: "Feature",
      categoryDocumentation: "Documentation",
      categoryRefactor: "Refactor",
      categoryTest: "Test",
      priorityLow: "Low",
      priorityMedium: "Medium",
      priorityHigh: "High",
      title: "Менеджер задач",
      dateLabel: "Date",
    }    
  };

  const router = getRoutes(dict[language], language);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <ThemeProvider theme={admiralTheme}>
      <DropdownProvider>
        <FontsVTBGroup />
        <TaskProvider>
          <Header
            theme={theme}
            onToggleTheme={toggleTheme}
            language={language}
            onToggleLanguage={toggleLanguage}
            dict={dict[language]}
          />
          <RouterProvider router={router} />
        </TaskProvider>
      </DropdownProvider>
    </ThemeProvider>
  );
}
export default App;
