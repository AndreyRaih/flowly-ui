# Flowly UI

## Описание проекта

Flowly UI - это проект, целью которого является создание UI элементов для интеграции в основной проект.

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
- [Prettier](https://prettier.io/docs/en/)

## Установка и запуск в режиме разработки

Для установки и запуска проекта в режиме разработки вам потребуется `yarn`. Если у вас его еще нет, вы можете установить его, следуя инструкциям на официальном сайте [Yarn](https://classic.yarnpkg.com/en/docs/install).

После установки Yarn, выполните следующие шаги:

1. Клонируйте репозиторий проекта:

```bash
git clone https://github.com/yourusername/flowly-ui.git
```
2. Установите зависимости:

```
yarn
```

3. Для запуска проекта:

```
yarn dev
```

4. Для локальной разработки `App.tsx` используется в качестве стенда

## Общие требования

1. Не добавлять зависимостей без согласования с командой
2. Для работы с цветами используем extented переменные из `tailwind.config.js`: `accent`, `primary`, `secondary`. Если вам нужен новый цвет, добавьте его в `tailwind.config.js` и согласуйте с командой. Для добавления новых цветов руководствуемся [Color Picker](https://tailwindcss.com/docs/customizing-colors#color-picker)
3. Добавление компонентов происходит через создание PR в основной проект. 
Нотация коммитов: `task/<component-name>: <commit-message>`

