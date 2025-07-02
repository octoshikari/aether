import type { MantineColorsTuple } from '@mantine/core';
import { createTheme } from '@mantine/core';
import { colors as sourceColors } from '../../theme/colors';

// Преобразуем массивы цветов в MantineColorsTuple
const transformColors = () => {
  const result: Record<string, MantineColorsTuple> = {};

  Object.entries(sourceColors).forEach(([key, value]) => {
    // Убеждаемся, что у нас есть 10 оттенков для каждого цвета
    if (Array.isArray(value) && value.length === 10) {
      result[key] = value as unknown as MantineColorsTuple;
    }
  });

  return result;
};

const mantineColors = transformColors();

/**
 * Определение темы Aether на основе Mantine
 */
export const aetherTheme = createTheme({
  colors: mantineColors,
  primaryColor: 'blue',
  fontFamily: 'Inter, system-ui, sans-serif',
  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
  components: {
    // Здесь будут переопределения компонентов
  },
});
