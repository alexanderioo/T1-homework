import { createBrowserRouter } from "react-router-dom";
import TaskListPage from "../pages/TaskListPage";
import TaskDetailsPage from "../pages/TaskDetailsPage";

export const router = createBrowserRouter([
  { path: "/", element: <TaskListPage /> },
  { path: "/task/:id", element: <TaskDetailsPage /> },
]);
