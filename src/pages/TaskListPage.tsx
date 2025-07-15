import TaskList from "../components/TaskList";
import { useSelector, useDispatch } from "react-redux";
import { createTask, updateTask, deleteTask, setTasks, deleteAllTasks } from '../store/tasksSlice';
import { useState } from "react";
import { Modal } from "@admiral-ds/react-ui";
import styled from "styled-components";
import { T, Button } from "@admiral-ds/react-ui";
import type { Task } from "../types/task";
import EditTaskModal from '../components/EditTaskModal';
import type { RootState } from '../store';

const FiltersBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
  &.filters-bar {}
  @media (max-width: 900px) {
    gap: 10px;
    margin-bottom: 16px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    margin-bottom: 10px;
  }
`;

const TopButtons = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    gap: 12px;
    margin-bottom: 16px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  & > button {
    width: 260px;
    min-width: 0;
    white-space: normal;
    text-align: center;
    padding: 0 16px;
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  width: 170px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  width: 140px;
`;

interface TaskListPageProps {
  dict: {
    restore: string;
    deleteAll: string;
    add: string;
    search: string;
    status: string;
    category: string;
    priority: string;
    statusTodo: string;
    statusInProgress: string;
    statusDone: string;
    categoryBug: string;
    categoryFeature: string;
    categoryDocumentation: string;
    categoryRefactor: string;
    categoryTest: string;
    priorityLow: string;
    priorityMedium: string;
    priorityHigh: string;
    title: string;
    subtitle: string;
    dateLabel: string;
  };
}

function TaskListPage({ dict, language }: TaskListPageProps & { language: 'ru' | 'en' }) {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState<{
    title: string;
    description: string;
    category: Task["category"];
    status: Task["status"];
    priority: Task["priority"];
  }>({
    title: "",
    description: "",
    category: "bug",
    status: "todo",
    priority: "medium",
  });
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [editTaskData, setEditTaskData] = useState<Task | null>(null);

  const restoreDemoTasks = () => {
    const demo: Task[] = [
      {
        id: "1",
        title: "Исправить баг в авторизации",
        description: "Ошибка при входе через Google",
        status: "todo",
        priority: "high",
        category: "bug",
        createdAt: new Date().toISOString(),
        dueDate: new Date(2025, 6, 13, 21, 40, 7).toISOString(),
      },
      {
        id: "2",
        title: "Добавить документацию",
        description: "",
        status: "in_progress",
        priority: "medium",
        category: "documentation",
        createdAt: new Date().toISOString(),
        dueDate: new Date(2025, 6, 13, 21, 40, 7).toISOString(),
      },
      {
        id: "3",
        title: "Рефакторинг кода",
        description: "Улучшить структуру компонентов и убрать дублирование",
        status: "done",
        priority: "low",
        category: "refactor",
        createdAt: new Date().toISOString(),
        dueDate: new Date(2025, 6, 14, 10, 0, 0).toISOString(),
      },
      {
        id: "4",
        title: "Добавить тесты",
        description: "Покрыть основные функции unit-тестами",
        status: "in_progress",
        priority: "high",
        category: "test",
        createdAt: new Date().toISOString(),
        dueDate: new Date(2025, 6, 15, 12, 0, 0).toISOString(),
      },
      {
        id: "5",
        title: "Новая функция: экспорт в PDF",
        description: "Добавить возможность экспорта задач в PDF",
        status: "todo",
        priority: "medium",
        category: "feature",
        createdAt: new Date().toISOString(),
        dueDate: new Date(2025, 6, 20, 18, 0, 0).toISOString(),
      },
    ];
    dispatch(deleteAllTasks());
    dispatch(setTasks(demo));
  };

  const deleteAllTasksHandler = () => {
    dispatch(deleteAllTasks());
  };

  const handleAddTask = () => {
    setShowAddModal(true);
  };

  const handleAddTaskSave = () => {
    dispatch(createTask({
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      category: newTask.category,
      status: newTask.status,
      priority: newTask.priority,
      createdAt: new Date().toISOString(),
    }));
    setShowAddModal(false);
    setNewTask({
      title: "",
      description: "",
      category: "bug",
      status: "todo",
      priority: "medium",
    });
  };

  const handleAddTaskChange = (field: string, value: string) => {
    setNewTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleEdit = (task: Task) => {
    setEditTask(task);
    setEditTaskData({ ...task });
  };
  const handleEditChange = (field: keyof Task, value: string) => {
    setEditTaskData((prev) => prev ? { ...prev, [field]: value } : prev);
  };
  const handleEditSave = () => {
    if (editTaskData) {
      dispatch(updateTask(editTaskData));
      setEditTask(null);
      setEditTaskData(null);
    }
  };
  const handleEditClose = () => {
    setEditTask(null);
    setEditTaskData(null);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const filtered = tasks.filter((task) => {
    return (
      (!search || task.title.toLowerCase().includes(search.toLowerCase())) &&
      (!status || task.status === status) &&
      (!category || task.category === category) &&
      (!priority || task.priority === priority)
    );
  });

  return (
    <div className="main-container">
      <T font="Subtitle/Subtitle 1">{dict.title}</T>
      <T font="Body/Body 1 Short">{dict.subtitle}</T>
      <TopButtons>
        <Button dimension="m" appearance="secondary" onClick={restoreDemoTasks} style={{whiteSpace: 'normal'}}>
          {dict.restore}
        </Button>
        <Button dimension="m" appearance="danger" onClick={deleteAllTasksHandler} style={{whiteSpace: 'normal'}}>
          {dict.deleteAll}
        </Button>
        <Button dimension="m" appearance="primary" onClick={handleAddTask} style={{whiteSpace: 'normal'}}>
          {dict.add}
        </Button>
      </TopButtons>
      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setShowAddModal(false)}>
          <div style={{ 
            maxWidth: 400, 
            padding: 24, 
            backgroundColor: 'white',
            borderRadius: 12,
            display: 'flex', 
            flexDirection: 'column', 
            gap: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }} onClick={e => e.stopPropagation()}>
            <T font="Subtitle/Subtitle 1">{language === 'ru' ? 'Добавить задачу' : 'Add Task'}</T>
            <input
              style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc' }}
              placeholder={language === 'ru' ? 'Заголовок' : 'Title'}
              value={newTask.title}
              onChange={e => handleAddTaskChange('title', e.target.value)}
            />
            <textarea
              style={{ padding: 8, borderRadius: 8, border: '1px solid #ccc', minHeight: 60 }}
              placeholder={language === 'ru' ? 'Описание' : 'Description'}
              value={newTask.description}
              onChange={e => handleAddTaskChange('description', e.target.value)}
            />
            <select value={newTask.category} onChange={e => handleAddTaskChange('category', e.target.value)}>
              <option value="bug">{language === 'ru' ? 'Баг' : 'Bug'}</option>
              <option value="feature">{language === 'ru' ? 'Функция' : 'Feature'}</option>
              <option value="documentation">{language === 'ru' ? 'Документация' : 'Documentation'}</option>
              <option value="refactor">{language === 'ru' ? 'Рефакторинг' : 'Refactor'}</option>
              <option value="test">{language === 'ru' ? 'Тест' : 'Test'}</option>
            </select>
            <select value={newTask.status} onChange={e => handleAddTaskChange('status', e.target.value)}>
              <option value="todo">{language === 'ru' ? 'Ожидает' : 'To Do'}</option>
              <option value="in_progress">{language === 'ru' ? 'В работе' : 'In Progress'}</option>
              <option value="done">{language === 'ru' ? 'Выполнено' : 'Done'}</option>
            </select>
            <select value={newTask.priority} onChange={e => handleAddTaskChange('priority', e.target.value)}>
              <option value="low">{language === 'ru' ? 'Низкий' : 'Low'}</option>
              <option value="medium">{language === 'ru' ? 'Средний' : 'Medium'}</option>
              <option value="high">{language === 'ru' ? 'Высокий' : 'High'}</option>
            </select>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <Button dimension="s" appearance="secondary" onClick={() => setShowAddModal(false)}>
                {language === 'ru' ? 'Отмена' : 'Cancel'}
              </Button>
              <Button dimension="s" onClick={handleAddTaskSave} disabled={!newTask.title.trim()}>
                {language === 'ru' ? 'Сохранить' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      )}
      <FiltersBar className="filters-bar">
        <Input
          type="text"
          placeholder={dict.search}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">{dict.status}</option>
          <option value="todo">{dict.statusTodo}</option>
          <option value="in_progress">{dict.statusInProgress}</option>
          <option value="done">{dict.statusDone}</option>
        </Select>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">{dict.category}</option>
          <option value="bug">{dict.categoryBug}</option>
          <option value="feature">{dict.categoryFeature}</option>
          <option value="documentation">{dict.categoryDocumentation}</option>
          <option value="refactor">{dict.categoryRefactor}</option>
          <option value="test">{dict.categoryTest}</option>
        </Select>
        <Select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="">{dict.priority}</option>
          <option value="low">{dict.priorityLow}</option>
          <option value="medium">{dict.priorityMedium}</option>
          <option value="high">{dict.priorityHigh}</option>
        </Select>
      </FiltersBar>
      <TaskList tasks={filtered} language={language} dict={dict} onEdit={handleEdit} onDelete={handleDelete} />
      {editTask && editTaskData && (
        <EditTaskModal
          open={!!editTask}
          onClose={handleEditClose}
          task={editTaskData}
          onChange={handleEditChange}
          onSave={handleEditSave}
          language={language}
          dict={dict}
        />
      )}
    </div>
  );
}
export default TaskListPage;
