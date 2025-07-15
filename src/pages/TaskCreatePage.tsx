import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTaskAsync } from '../store/tasksSlice';
import type { AppDispatch } from '../store';
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

interface TaskCreatePageProps {
  dict: any;
  language: 'ru' | 'en';
}

const TaskCreatePage = ({ dict, language }: TaskCreatePageProps) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Task, 'id' | 'createdAt'>>({
    title: '',
    description: '',
    category: 'bug',
    status: 'todo',
    priority: 'medium',
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    dispatch(createTaskAsync(formData));
    navigate('/');
  };

  return (
    <Container>
      <T font="Subtitle/Subtitle 1">{language === 'ru' ? 'Создать задачу' : 'Create Task'}</T>
      <TextField
        value={formData.title}
        onChange={e => handleChange('title', e.target.value)}
        placeholder={language === 'ru' ? 'Заголовок' : 'Title'}
      />
      <TextField
        value={formData.description || ''}
        onChange={e => handleChange('description', e.target.value)}
        placeholder={language === 'ru' ? 'Описание' : 'Description'}
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
        <Button dimension="s" onClick={handleSave} disabled={!formData.title.trim()}>
          {language === 'ru' ? 'Создать' : 'Create'}
        </Button>
        <Button
          dimension="s"
          appearance="secondary"
          onClick={() => navigate("/")}
        >
          {language === 'ru' ? 'Отмена' : 'Cancel'}
        </Button>
      </div>
    </Container>
  );
};

export default TaskCreatePage; 