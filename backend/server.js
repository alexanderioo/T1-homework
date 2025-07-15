import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;
const DATA_PATH = path.join(__dirname, 'data', 'items.json');

app.use(cors());
app.use(bodyParser.json());

async function readTasks() {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeTasks(tasks) {
  await fs.writeFile(DATA_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
}

app.get('/api/tasks', async (req, res) => {
  const tasks = await readTasks();
  res.json(tasks);
});

app.get('/api/tasks/:id', async (req, res) => {
  const tasks = await readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

app.post('/api/tasks', async (req, res) => {
  const tasks = await readTasks();
  const task = req.body;
  task.id = Date.now().toString();
  task.createdAt = new Date().toISOString();
  tasks.push(task);
  await writeTasks(tasks);
  res.status(201).json(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const tasks = await readTasks();
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });
  tasks[idx] = { ...tasks[idx], ...req.body, id: req.params.id };
  await writeTasks(tasks);
  res.json(tasks[idx]);
});

app.delete('/api/tasks/:id', async (req, res) => {
  let tasks = await readTasks();
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });
  const deleted = tasks.splice(idx, 1);
  await writeTasks(tasks);
  res.json(deleted[0]);
});

app.delete('/api/tasks', async (req, res) => {
  await writeTasks([]);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 