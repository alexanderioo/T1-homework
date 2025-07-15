import type { FC } from "react";
import type { Task } from "../../types/task";
import { useNavigate } from "react-router-dom";
import { T, Button, Tag } from "@admiral-ds/react-ui";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-width: 260px;
  height: 100%;
  margin-bottom: 20px; /* Добавлен внешний отступ для разделения карточек */
`;

const CardContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TagRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  min-width: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 0.95em;
`;

/**
 * Пропсы компонента TaskItem
 * @typedef {Object} TaskItemProps
 * @property {Task} task - Задача для отображения
 * @property {'ru'|'en'} [language] - Язык интерфейса
 * @property {any} [dict] - Словарь для мультиязычности
 * @property {(task: Task) => void} [onEdit] - Колбэк для редактирования
 * @property {(id: string) => void} [onDelete] - Колбэк для удаления
 */
interface TaskItemProps {
  task: Task;
  language?: 'ru' | 'en';
  dict?: any;
  onEdit?: (task: Task) => void;
  onDelete?: (id: string) => void;
}

/**
 * Компонент карточки задачи
 * @component
 * @param {TaskItemProps} props
 */
const TaskItem: FC<TaskItemProps> = ({ task, language = 'ru', dict, onEdit, onDelete }) => {
  const navigate = useNavigate();

  // Цвета для тегов
  const statusKind =
    task.status === "todo"
      ? "warning"
      : task.status === "in_progress"
      ? "attention"
      : "success";
  const priorityKind =
    task.priority === "high"
      ? "error"
      : task.priority === "medium"
      ? "warning"
      : "success";
  const categoryKind = "neutral";

  // Мультиязычные подписи для тегов
  const statusLabels = {
    ru: { todo: "Ожидает", in_progress: "В работе", done: "Выполнено" },
    en: { todo: "To Do", in_progress: "In Progress", done: "Done" },
  };
  const priorityLabels = {
    ru: { high: "Высокий", medium: "Средний", low: "Низкий" },
    en: { high: "High", medium: "Medium", low: "Low" },
  };
  const categoryLabels = {
    ru: { bug: "Баг", feature: "Функция", documentation: "Документация", refactor: "Рефакторинг", test: "Тест" },
    en: { bug: "Bug", feature: "Feature", documentation: "Documentation", refactor: "Refactor", test: "Test" },
  };

  return (
    <Card onClick={() => navigate(`/task/${task.id}`)} style={{ cursor: 'pointer' }}>
      <CardContent>
        <T font="Subtitle/Subtitle 1" style={{ color: '#111' }}>{task.title}</T>
        {task.description && (
          <T font="Body/Body 1 Short" as="p" style={{ color: '#111' }}>{task.description}</T>
        )}
        <DateRow>
          <span role="img" aria-label="calendar">📅</span>
          {dict && dict.dateLabel ? dict.dateLabel + ': ' : ''}
          {task.dueDate ? new Date(task.dueDate).toLocaleString() : new Date(task.createdAt).toLocaleString()}
        </DateRow>
        <TagRow>
          <Tag kind={statusKind as any}>{statusLabels[language][task.status] || task.status}</Tag>
          <Tag kind={categoryKind as any}>{categoryLabels[language][task.category] || task.category}</Tag>
          <Tag kind={priorityKind as any}>{priorityLabels[language][task.priority] || task.priority}</Tag>
        </TagRow>
      </CardContent>
      <Actions onClick={e => e.stopPropagation()}>
        <Button dimension="s" appearance="danger" onClick={() => onDelete && onDelete(task.id)}>
          🗑️
        </Button>
      </Actions>
    </Card>
  );
};

export default TaskItem;
