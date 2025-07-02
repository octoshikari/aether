import type { FC, PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import type { MantineProviderProps } from '@mantine/core';
import { aetherTheme } from '../../shared/config';

/**
 * Тип пропсов для AetherUiProvider
 */
export type AetherUiProviderProps = Omit<MantineProviderProps, 'theme'>;

/**
 * Provider компонент для Aether UI Kit
 * Инициализирует Mantine с настроенной темой Aether
 */
export const AetherUiProvider: FC<PropsWithChildren<AetherUiProviderProps>> = ({
  children,
  ...otherProps
}) => {
  return (
    <MantineProvider
      theme={aetherTheme}
      {...otherProps}
    >
      {children}
    </MantineProvider>
  );
};
