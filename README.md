# Менеджер задач (Task Manager)

## Описание реализованного функционала

Task Manager — современное SPA-приложение для управления задачами с поддержкой AdmiralDS UI, смены темы, мультиязычности и адаптивного дизайна.

**Основные возможности:**
- Просмотр, добавление, редактирование и удаление задач
- Фильтрация по статусу, категории, приоритету
- Поиск по названию задачи
- Мультиязычность (RU/EN)
- Переключение светлой/тёмной темы
- Современный адаптивный дизайн
- Пример задач для быстрого старта
- Backend на Express (Node.js) с хранением задач в JSON и REST API

## Инструкция по запуску проекта

### Фронтенд (Vite + React)
1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Backend (Express)
1. Перейдите в папку backend:
   ```bash
   cd backend
   npm install
   ```
2. Запустите сервер:
   ```bash
   node server.js
   ```
3. API будет доступен по адресу [http://localhost:4000/api/tasks](http://localhost:4000/api/tasks)

## Используемые технологии и подходы
- React 18 + TypeScript
- Redux Toolkit (RTK) + createAsyncThunk
- AdmiralDS UI (admiral-ds/react-ui)
- styled-components
- react-router-dom v6+
- Vite
- Express (Node.js)
- REST API, хранение задач в JSON
- Архитектура Feature-Sliced Design (FSD)

## Краткое описание архитектуры
- Проект реализован по принципам Feature-Sliced Design (FSD): разделение на app, entities, features, pages, widgets, shared.
- Для управления состоянием используется Redux Toolkit (RTK) с асинхронными экшенами (createAsyncThunk).
- Маршрутизация реализована через react-router-dom.
- Backend вынесен в отдельную папку и развёрнут на Render.

## Живой пример работы приложения
- [Демо на GitHub Pages](https://alexanderioo.github.io/T1-homework/)
- [Backend API (Render)](https://t1-homework-lwtl.onrender.com/api/tasks)

## Ссылка на репозиторий
[https://github.com/alexanderioo/T1-homework](https://github.com/alexanderioo/T1-homework)

---
**Автор:** Фролов Александр Дмитриевич
