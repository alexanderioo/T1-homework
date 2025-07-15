import { createBrowserRouter } from "react-router-dom";
import TaskListPage from "../pages/TaskListPage";
import TaskDetailsPage from "../pages/TaskDetailsPage";

export function getRoutes(dict: any, language: 'ru' | 'en') {
  return createBrowserRouter([
    { path: "/", element: <TaskListPage dict={dict} language={language} /> },
    { path: "/task/:id", element: <TaskDetailsPage dict={dict} language={language} /> },
  ]);
}
