import { useState, useEffect } from "react";
import { T, TextField, Button } from "@admiral-ds/react-ui";
import styled from "styled-components";
import type { Task } from "../types/task";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface TaskFormProps {
  task?: Partial<Task>;
  onChange: (field: keyof Task, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  isEdit?: boolean;
  language: 'ru' | 'en';
  dict: any;
}

const TaskForm = ({ task = {}, onChange, onSave, onCancel, isEdit = false, language, dict }: TaskFormProps) => {
  return (
    <Container>
      <T font="Subtitle/Subtitle 1">
        {isEdit
          ? language === 'ru' ? 'Редактирование задачи' : 'Edit Task'
          : language === 'ru' ? 'Создать задачу' : 'Create Task'}
      </T>
      <TextField
        value={task.title || ''}
        onChange={e => onChange('title', e.target.value)}
        placeholder={language === 'ru' ? 'Заголовок' : 'Title'}
        label={language === 'ru' ? 'Заголовок *' : 'Title *'}
      />
      <TextField
        value={task.description || ''}
        onChange={e => onChange('description', e.target.value)}
        placeholder={language === 'ru' ? 'Описание' : 'Description'}
        label={language === 'ru' ? 'Описание' : 'Description'}
      />
      <label>{language === 'ru' ? 'Категория' : 'Category'}</label>
      <select value={task.category || 'bug'} onChange={e => onChange('category', e.target.value)}>
        <option value="bug">{language === 'ru' ? 'Баг' : 'Bug'}</option>
        <option value="feature">{language === 'ru' ? 'Функция' : 'Feature'}</option>
        <option value="documentation">{language === 'ru' ? 'Документация' : 'Documentation'}</option>
        <option value="refactor">{language === 'ru' ? 'Рефакторинг' : 'Refactor'}</option>
        <option value="test">{language === 'ru' ? 'Тест' : 'Test'}</option>
      </select>
      <label>{language === 'ru' ? 'Статус' : 'Status'}</label>
      <select value={task.status || 'todo'} onChange={e => onChange('status', e.target.value)}>
        <option value="todo">{language === 'ru' ? 'Ожидает' : 'To Do'}</option>
        <option value="in_progress">{language === 'ru' ? 'В работе' : 'In Progress'}</option>
        <option value="done">{language === 'ru' ? 'Выполнено' : 'Done'}</option>
      </select>
      <label>{language === 'ru' ? 'Приоритет' : 'Priority'}</label>
      <select value={task.priority || 'medium'} onChange={e => onChange('priority', e.target.value)}>
        <option value="low">{language === 'ru' ? 'Низкий' : 'Low'}</option>
        <option value="medium">{language === 'ru' ? 'Средний' : 'Medium'}</option>
        <option value="high">{language === 'ru' ? 'Высокий' : 'High'}</option>
      </select>
      {task.createdAt && (
        <div style={{ color: '#888', fontSize: 14 }}>
          {language === 'ru' ? 'Дата создания: ' : 'Created at: '}
          {new Date(task.createdAt).toLocaleString()}
        </div>
      )}
      <div style={{ display: "flex", gap: 12 }}>
        <Button dimension="s" onClick={onSave} disabled={!task.title?.trim()}>
          {language === 'ru' ? 'Сохранить' : 'Save'}
        </Button>
        <Button
          dimension="s"
          appearance="secondary"
          onClick={onCancel}
        >
          {language === 'ru' ? 'Отмена' : 'Cancel'}
        </Button>
      </div>
    </Container>
  );
};

export default TaskForm; 