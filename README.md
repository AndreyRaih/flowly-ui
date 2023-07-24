# Atomic UI

В этом проекте будут собраны атомарные компоненты для UI.

Таски для создания компонентов находятся в папке `src/tasks`.
Внутри каждой поддиректории находится `README.md` с описанием задачи и ссылкой на Figma 😉

## Общие требования

1. *По возможности* не добавлять новых зависимостей. По-умолчанию в проекте используются: `date-fns` и `chartjs`
2. Добавление компонентов происходит через создание PR в основной проект. 
Нотация коммитов: `task/<component-name>: <commit-message>`
3. Для работы с цветами используем переменные из `theme.extend.colors` в `tailwind.config.js`: `accent`, `primary`, `secondary`. 
Если будет нужен цвет вне палитры из [Color Picker](https://tailwindcss.com/docs/customizing-colors#color-picker), то понадобится добавить его в `tailwind.config.js`. 

## Стек и инструменты

В проекте используются следующие технологии и инструменты:

### Разработка
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Preact](https://preactjs.com/guide/v10/getting-started)
- [TailwindCSS](https://tailwindcss.com/docs)
### Сборка и развертывание
- [Vite](https://vitejs.dev/guide/)
- [Yarn](https://classic.yarnpkg.com/en/docs)
### Кодстайл
- [eslint](https://eslint.org/)

Инструкция для форматирования кода в **VS code**:

Добавьте следующие настройки в общие настройки (user settings json) или настройки проекта (workspace settings json): 

```
  "eslint.format.enable": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
```

Теперь в качестве форматтера будет использоваться eslint с правилами из конфига `.eslintrc.cjs`. 

Если вы хотите, чтобы код автоматически форматировался при сохранении, то добавьте настройку.

```
  "editor.formatOnSave": true
```

## Установка и запуск в режиме разработки

1. Установите зависимости:

```
yarn
## или
npm i
```

3. Для запуска проекта:

```
yarn dev
## или
npm run dev
```

4. Для локальной разработки можно использовать `App.tsx` в качестве стенда

May force be with you 🖖
