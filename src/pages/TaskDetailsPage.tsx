import { type FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
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
  const { tasks, updateTask } = useTasks();

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
      updateTask(formData);
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

      <Select
        value={formData.category}
        onChange={e => handleChange("category", e.target.value)}
        placeholder={dict.category}
      >
        <option value="bug">{language === 'ru' ? 'Баг' : 'Bug'}</option>
        <option value="feature">{language === 'ru' ? 'Функция' : 'Feature'}</option>
        <option value="documentation">{language === 'ru' ? 'Документация' : 'Documentation'}</option>
        <option value="refactor">{language === 'ru' ? 'Рефакторинг' : 'Refactor'}</option>
        <option value="test">{language === 'ru' ? 'Тест' : 'Test'}</option>
      </Select>

      <Select
        value={formData.status}
        onChange={e => handleChange("status", e.target.value)}
        placeholder={dict.status}
      >
        <option value="todo">{language === 'ru' ? 'Ожидает' : 'To Do'}</option>
        <option value="in_progress">{language === 'ru' ? 'В работе' : 'In Progress'}</option>
        <option value="done">{language === 'ru' ? 'Выполнено' : 'Done'}</option>
      </Select>

      <Select
        value={formData.priority}
        onChange={e => handleChange("priority", e.target.value)}
        placeholder={dict.priority}
      >
        <option value="low">{language === 'ru' ? 'Низкий' : 'Low'}</option>
        <option value="medium">{language === 'ru' ? 'Средний' : 'Medium'}</option>
        <option value="high">{language === 'ru' ? 'Высокий' : 'High'}</option>
      </Select>

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
