import type { FC } from 'react';
import { Modal, T, TextField, Button } from '@admiral-ds/react-ui';
import type { Task } from '../types/task';

interface EditTaskModalProps {
  open: boolean;
  onClose: () => void;
  task: Task;
  onChange: (field: keyof Task, value: string) => void;
  onSave: () => void;
  language: 'ru' | 'en';
  dict: any;
}

const selectStyle = { padding: 8, borderRadius: 8, border: '1px solid #ccc', marginBottom: 8 };

const EditTaskModal: FC<EditTaskModalProps> = ({ open, onClose, task, onChange, onSave, language, dict }) => {
  return (
    <Modal open={open} onClose={onClose} style={{ maxWidth: 520 }}>
      <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <T font="Header/H2" style={{ marginBottom: 8 }}>
          {language === 'ru' ? 'Редактировать задачу' : 'Edit Task'}
        </T>
        <TextField
          label={language === 'ru' ? 'Задача *' : 'Task *'}
          value={task.title}
          onChange={e => onChange('title', e.target.value)}
          placeholder={language === 'ru' ? 'Заголовок' : 'Title'}
          style={{ marginBottom: 8 }}
        />
        <TextField
          label={language === 'ru' ? 'Описание' : 'Description'}
          value={task.description || ''}
          onChange={e => onChange('description', e.target.value)}
          placeholder={language === 'ru' ? 'Описание' : 'Description'}
          style={{ marginBottom: 8 }}
        />
        <T font="Caption/Caption 1">{language === 'ru' ? 'Категория' : 'Category'}</T>
        <select
          value={task.category}
          onChange={e => onChange('category', e.target.value)}
          style={selectStyle}
        >
          <option value="bug">{language === 'ru' ? 'Баг' : 'Bug'}</option>
          <option value="feature">{language === 'ru' ? 'Функция' : 'Feature'}</option>
          <option value="documentation">{language === 'ru' ? 'Документация' : 'Documentation'}</option>
          <option value="refactor">{language === 'ru' ? 'Рефакторинг' : 'Refactor'}</option>
          <option value="test">{language === 'ru' ? 'Тест' : 'Test'}</option>
        </select>
        <T font="Caption/Caption 1">{language === 'ru' ? 'Статус' : 'Status'}</T>
        <select
          value={task.status}
          onChange={e => onChange('status', e.target.value)}
          style={selectStyle}
        >
          <option value="todo">{language === 'ru' ? 'Ожидает' : 'To Do'}</option>
          <option value="in_progress">{language === 'ru' ? 'В работе' : 'In Progress'}</option>
          <option value="done">{language === 'ru' ? 'Выполнено' : 'Done'}</option>
        </select>
        <T font="Caption/Caption 1">{language === 'ru' ? 'Приоритет' : 'Priority'}</T>
        <select
          value={task.priority}
          onChange={e => onChange('priority', e.target.value)}
          style={selectStyle}
        >
          <option value="low">{language === 'ru' ? 'Низкий' : 'Low'}</option>
          <option value="medium">{language === 'ru' ? 'Средний' : 'Medium'}</option>
          <option value="high">{language === 'ru' ? 'Высокий' : 'High'}</option>
        </select>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', marginTop: 24 }}>
          <Button dimension="s" appearance="secondary" onClick={onClose}>
            {language === 'ru' ? 'Отмена' : 'Cancel'}
          </Button>
          <Button dimension="s" onClick={onSave} disabled={!task.title.trim()}>
            {language === 'ru' ? 'Сохранить' : 'Save'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTaskModal; 