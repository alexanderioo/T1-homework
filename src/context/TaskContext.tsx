import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from "react";
import type { Task } from "../types/task";

type TaskAction =
  | { type: "ADD"; payload: Task }
  | { type: "UPDATE"; payload: Task }
  | { type: "DELETE"; payload: string };

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: "1",
      title: "Исправить баг в авторизации",
      description: "Ошибка при входе через Google",
      status: "todo",
      priority: "high",
      category: "bug",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Добавить документацию",
      description: "",
      status: "in_progress",
      priority: "medium",
      category: "documentation",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Рефакторинг кода",
      description: "Улучшить структуру компонентов и убрать дублирование",
      status: "done",
      priority: "low",
      category: "refactor",
      createdAt: new Date().toISOString(),
    },
    {
      id: "4",
      title: "Добавить тесты",
      description: "Покрыть основные функции unit-тестами",
      status: "in_progress",
      priority: "high",
      category: "test",
      createdAt: new Date().toISOString(),
    },
    {
      id: "5",
      title: "Новая функция: экспорт в PDF",
      description: "Добавить возможность экспорта задач в PDF",
      status: "todo",
      priority: "medium",
      category: "feature",
      createdAt: new Date().toISOString(),
    },
    {
      id: "6",
      title: "Обновить дизайн главной страницы",
      description: "Сделать редизайн с учётом новых требований",
      status: "done",
      priority: "high",
      category: "feature",
      createdAt: new Date().toISOString(),
    },
    {
      id: "7",
      title: "Починить уведомления",
      description: "Push-уведомления не приходят на Android",
      status: "todo",
      priority: "medium",
      category: "bug",
      createdAt: new Date().toISOString(),
    },
    {
      id: "8",
      title: "Добавить CI/CD",
      description: "Настроить автоматическую сборку и деплой",
      status: "in_progress",
      priority: "high",
      category: "feature",
      createdAt: new Date().toISOString(),
    },
    {
      id: "9",
      title: "Провести код-ревью",
      description: "Проверить pull request #42",
      status: "done",
      priority: "low",
      category: "refactor",
      createdAt: new Date().toISOString(),
    },
    {
      id: "10",
      title: "Обновить зависимости",
      description: "Перейти на свежие версии библиотек",
      status: "todo",
      priority: "medium",
      category: "refactor",
      createdAt: new Date().toISOString(),
    },
  ],
};

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD":
      return { tasks: [...state.tasks, action.payload] };
    case "UPDATE":
      return {
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case "DELETE":
      return {
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
}

const TaskContext = createContext<{
  state: TaskState;
  dispatch: Dispatch<TaskAction>;
} | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must not be used in provider");
  return {
    tasks: ctx.state.tasks,
    addTask: (task: Task) => ctx.dispatch({ type: "ADD", payload: task }),
    updateTask: (task: Task) => ctx.dispatch({ type: "UPDATE", payload: task }),
    deleteTask: (id: string) => ctx.dispatch({ type: "DELETE", payload: id }),
  };
};
