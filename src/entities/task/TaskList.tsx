import type { FC } from "react";
import type { Task } from "../../types/task";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px 24px;
  justify-content: center;
  align-items: stretch;
  margin: 32px 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 12px;
    margin: 20px 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px 0;
    margin: 12px 0;
  }
`;

interface TaskListProps {
  tasks: Task[];
  language?: 'ru' | 'en';
  dict?: any;
  onEdit?: (task: Task) => void;
  onDelete?: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, language = 'ru', dict, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return <div style={{ textAlign: 'center', color: '#888', margin: '40px 0' }}>
      {language === 'ru' ? 'Нет задач' : 'No tasks'}
    </div>;
  }
  return (
    <Grid>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          language={language}
          dict={dict}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Grid>
  );
};

export default TaskList;

