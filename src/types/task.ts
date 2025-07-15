/**
 * Интерфейс задачи (Task)
 * @typedef {Object} Task
 * @property {string} id - Уникальный идентификатор задачи
 * @property {string} title - Заголовок задачи
 * @property {string} [description] - Описание задачи
 * @property {"todo"|"in_progress"|"done"} status - Статус задачи
 * @property {"low"|"medium"|"high"} priority - Приоритет задачи
 * @property {"bug"|"feature"|"documentation"|"refactor"|"test"} category - Категория задачи
 * @property {string} createdAt - Дата создания
 * @property {string} [dueDate] - Дата дедлайна
 */
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  category: "bug" | "feature" | "documentation" | "refactor" | "test";
  createdAt: string;
  dueDate?: string;
}
