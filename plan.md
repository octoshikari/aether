# План разработки монорепозитория **Aether**

> UI-Kit основан на **Mantine 8**, сборка пакетов через **pnpm**. Линтинг и форматирование — **Biome**. Версия Node — **22**.

## 1. Инициализация и базовые настройки

1.1 Инициализируем репозиторий (если нужно)
```bash
git init
```

1.2 Создаём `package.json` через pnpm
```bash
pnpm init
```
Минимальный `package.json`:
```jsonc
{
  "name": "aether",
  "private": true,
  "version": "0.0.0",
  "workspaces": ["packages/*", "apps/*"]
}
```

1.3 Добавляем `.npmrc`
```
package-manager=pnpm@latest
strict-peer-dependencies=false
```

1.4 Добавляем `volta` (опционально) или описываем версию Node в `.nvmrc` / `engines`:
```jsonc
"engines": {
  "node": ">=22"
}
```

## 2. Структура монорепозитория
```
/packages
  /react        – UI-кит (@aether/react)   <-- Mantine 8
  /utils        – общие утилиты (пример)
  /fhir-schema  – типы/валидация ресурсов FHIR
/apps
  /storybook    – Storybook playground
/configs        – общие конфиги tsconfig, vitest
```

### Пакет `@aether/react`
* Экспортирует все UI-компоненты.
* Использует MantineProvider c настроенной темой.
* Билд через `tsup` в ESM + DTS.
* Архитектура по методологии **Feature-Sliced Design (FSD)**:  
  ```
  /src
    /shared       - общие утилиты, типы, константы
      /ui         - базовые UI-компоненты (атомы)
      /api        - интеграция с FHIR API
      /config     - конфигурация темы, константы
      /lib        - вспомогательные функции
    /entities     - бизнес-сущности (Patient, Observation и т.д.)
    /features     - интерактивные фичи (формы, поиск, фильтры)
    /widgets      - композитные компоненты (карточки, панели)
    /pages        - примеры страниц (опционально)
    /app          - корневые провайдеры, конфигурация
  ```

## 3. Технический стек
* **React 19 + TypeScript**
* **Mantine 8** для UI.
* **tsup** — сборка библиотек.  
  Скрипт: `"build": "tsup src/index.ts --dts --format esm"`.
* **Storybook 9** в `apps/storybook`.
* **Vitest** + `@testing-library/react` для тестов.
* **Biome** (lint+format) вместо ESLint/Prettier.

## 4. Общие конфигурации

### 4.1 Biome
`biome.json` (пример, корень репозитория):
```jsonc
{
  "extends": [],
  "linter": {
    "rules": {
      "react/no-unused-state": "error"
    }
  },
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2
  }
}
```
Скрипты в корне:
```jsonc
"lint": "biome check .",
"format": "biome format .",
```

### 4.2 TypeScript
`tsconfig.base.json` в `configs/` и наследование в пакетах.

### 4.3 Vitest
`configs/vitest.config.ts` – общий.

## 5. Storybook
* Расположен в `apps/storybook`.
* Использует `@storybook/react`.
* Aliases на пакеты через `build.devServer.fs.strict` или `storybook-addon-pnpm`.
* Скрипты в корне:
```jsonc
"storybook": "pnpm --filter @aether/storybook storybook dev -p 6006",
"build:storybook": "pnpm --filter @aether/storybook storybook build"
```

## 6. CI/CD (GitHub Actions)

### 6.1 Тесты и сборка
`<root>/.github/workflows/ci.yml`:
```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  test-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm test
      - run: pnpm -r build
```

### 6.2 Деплой Storybook на GitHub Pages
`<root>/.github/workflows/storybook-deploy.yml`:
```yaml
name: Deploy Storybook
on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @aether/storybook build:storybook
      - uses: peaceiris/actions-gh-pages@v4
        with:
          publish_dir: apps/storybook/storybook-static
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

## 7. Автоматический релиз пакетов
* **changesets** — версионирование и лог изменений.
* Workflow `release.yml` публикует после merge PR с changeset.

## 8. Порядок работ
1. Репо + pnpm + Biome + базовые конфиги.  
2. Создать `@aether/react` c темой и первыми атомами по FSD-архитектуре:  
   - `/shared/ui` - базовые компоненты (Button, TextInput)
   - `/shared/config` - тема и константы
   - `/entities` - FHIR-сущности (Patient, Practitioner)
3. Поднять Storybook + деплой.  
4. Добавить Vitest tests.  
5. Создать utils/fhir-schema (или иные пакеты).  
6. Настроить changesets + release.

---
**Готово к имплементации.**
