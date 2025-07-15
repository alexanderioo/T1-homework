import { type FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskAsync } from '../entities/task/model/tasksSlice';
import type { RootState, AppDispatch } from '../store';
import type { Task } from "../types/task";

import {
  T,
  TextField,
  Button,
  Select,
} from "@admiral-ds/react-ui";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface TaskDetailsPageProps {
  dict: any;
  language: 'ru' | 'en';
}

const TaskDetailsPage: FC<TaskDetailsPageProps> = ({ dict, language }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const task = tasks.find((t) => t.id === id);
  const [formData, setFormData] = useState<Task | null>(null);

  useEffect(() => {
    if (task) setFormData(task);
  }, [task]);

  if (!formData) {
    return <T font="Body/Body 1 Short">Задача не найдена</T>;
  }

  const handleChange = (field: keyof Task, value: string) => {
    setFormData((prev) => prev && { ...prev, [field]: value });
  };

  const handleSave = () => {
    if (formData) {
      dispatch(updateTaskAsync(formData));
      navigate("/");
    }
  };

  return (
    <Container>
      <T font="Subtitle/Subtitle 1">Редактирование задачи</T>

      <TextField
        value={formData.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Заголовок"
      />

      <TextField
        value={formData.description || ""}
        onChange={(e) => handleChange("description", e.target.value)}
        placeholder="Описание"
      />

      <select value={formData.category} onChange={e => handleChange('category', e.target.value)}>
        <option value="bug">{language === 'ru' ? 'Баг' : 'Bug'}</option>
        <option value="feature">{language === 'ru' ? 'Функция' : 'Feature'}</option>
        <option value="documentation">{language === 'ru' ? 'Документация' : 'Documentation'}</option>
        <option value="refactor">{language === 'ru' ? 'Рефакторинг' : 'Refactor'}</option>
        <option value="test">{language === 'ru' ? 'Тест' : 'Test'}</option>
      </select>
      <select value={formData.status} onChange={e => handleChange('status', e.target.value)}>
        <option value="todo">{language === 'ru' ? 'Ожидает' : 'To Do'}</option>
        <option value="in_progress">{language === 'ru' ? 'В работе' : 'In Progress'}</option>
        <option value="done">{language === 'ru' ? 'Выполнено' : 'Done'}</option>
      </select>
      <select value={formData.priority} onChange={e => handleChange('priority', e.target.value)}>
        <option value="low">{language === 'ru' ? 'Низкий' : 'Low'}</option>
        <option value="medium">{language === 'ru' ? 'Средний' : 'Medium'}</option>
        <option value="high">{language === 'ru' ? 'Высокий' : 'High'}</option>
      </select>

      <div style={{ display: "flex", gap: 12 }}>
        <Button dimension="s" onClick={handleSave}>
          Сохранить
        </Button>
        <Button
          dimension="s"
          appearance="secondary"
          onClick={() => navigate("/")}
        >
          Отмена
        </Button>
      </div>
    </Container>
  );
};

export default TaskDetailsPage;
