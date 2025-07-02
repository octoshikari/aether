import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../../../packages/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../stories/**/*.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-onboarding', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  docs: {},
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@aether/react': '../../../packages/react/src',
      };
    }

    config.esbuild = {
      ...config.esbuild,
      jsx: 'automatic',
    };
    return config;
  },
};

export default config;
