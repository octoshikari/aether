# Aether UI Kit

> FHIR UI Kit на основе Mantine

## О проекте

Aether — это библиотека UI-компонентов, специально разработанная для создания интерфейсов, работающих с FHIR-ресурсами. Библиотека построена на основе [Mantine UI](https://mantine.dev/) и предоставляет компоненты с FHIR-специфичными стилями и функциональностью.

## Особенности

- 🧩 **Компоненты с FHIR-специфичными вариантами**
- 🎨 **Тема с цветами, соответствующими статусам FHIR**
- 📚 **Storybook для документации и тестирования**
- 🛠️ **TypeScript из коробки**

## Начало работы

```bash
# Установка зависимостей
pnpm install

# Запуск Storybook
pnpm storybook

# Сборка библиотеки
pnpm build
```

## Структура проекта

```
/packages
  /react        – UI-кит (@aether/react)
/apps
  /storybook    – Storybook playground
```

## Использование

```jsx
import { AetherProvider, Button, TextInput } from '@aether/react';

function App() {
  return (
    <AetherProvider>
      <Button variant="primary">Сохранить</Button>
      <TextInput label="Имя пациента" placeholder="Введите имя" />
    </AetherProvider>
  );
}
```
