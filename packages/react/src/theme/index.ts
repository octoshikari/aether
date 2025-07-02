/**
 * Реэкспорт темы из новой архитектуры FSD
 * Этот файл сохранен для обратной совместимости
 */

// Рекомендуется использовать AetherUiProvider из app/providers вместо AetherProvider
export { AetherUiProvider as AetherProvider } from '../app/providers';
export { aetherTheme } from '../shared/config/theme';
