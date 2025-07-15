import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Task } from '../types/task';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: '1',
      title: 'Исправить баг в авторизации',
      description: 'Ошибка при входе через Google',
      status: 'todo',
      priority: 'high',
      category: 'bug',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Добавить документацию',
      description: '',
      status: 'in_progress',
      priority: 'medium',
      category: 'documentation',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Рефакторинг кода',
      description: 'Улучшить структуру компонентов и убрать дублирование',
      status: 'done',
      priority: 'low',
      category: 'refactor',
      createdAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Добавить тесты',
      description: 'Покрыть основные функции unit-тестами',
      status: 'in_progress',
      priority: 'high',
      category: 'test',
      createdAt: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'Новая функция: экспорт в PDF',
      description: 'Добавить возможность экспорта задач в PDF',
      status: 'todo',
      priority: 'medium',
      category: 'feature',
      createdAt: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Обновить дизайн главной страницы',
      description: 'Сделать редизайн с учётом новых требований',
      status: 'done',
      priority: 'high',
      category: 'feature',
      createdAt: new Date().toISOString(),
    },
    {
      id: '7',
      title: 'Починить уведомления',
      description: 'Push-уведомления не приходят на Android',
      status: 'todo',
      priority: 'medium',
      category: 'bug',
      createdAt: new Date().toISOString(),
    },
    {
      id: '8',
      title: 'Добавить CI/CD',
      description: 'Настроить автоматическую сборку и деплой',
      status: 'in_progress',
      priority: 'high',
      category: 'feature',
      createdAt: new Date().toISOString(),
    },
    {
      id: '9',
      title: 'Провести код-ревью',
      description: 'Проверить pull request #42',
      status: 'done',
      priority: 'low',
      category: 'refactor',
      createdAt: new Date().toISOString(),
    },
    {
      id: '10',
      title: 'Обновить зависимости',
      description: 'Перейти на свежие версии библиотек',
      status: 'todo',
      priority: 'medium',
      category: 'refactor',
      createdAt: new Date().toISOString(),
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    updateTask(state, action: PayloadAction<Task>) {
      const idx = state.tasks.findIndex(t => t.id === action.payload.id);
      if (idx !== -1) {
        state.tasks[idx] = action.payload;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    deleteAllTasks(state) {
      state.tasks = [];
    },
  },
});

export const { createTask, updateTask, deleteTask, setTasks, deleteAllTasks } = tasksSlice.actions;
export default tasksSlice.reducer; 