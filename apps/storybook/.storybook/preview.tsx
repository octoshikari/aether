import type { Preview } from '@storybook/react';
import { AetherUiProvider } from '@aether/react';
import '@mantine/core/styles.css';
// biome-ignore lint/correctness/noUnusedImports: need
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <AetherUiProvider>
        <div style={{ padding: '24px' }}>
          <Story />
        </div>
      </AetherUiProvider>
    ),
  ],
};

export default preview;
