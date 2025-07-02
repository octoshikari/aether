import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/Button/Button';
import { TextInput } from '../../../components/TextInput/TextInput';
import { AetherUiProvider } from '../AetherUiProvider';

const meta = {
  title: 'App/Providers/AetherUiProvider',
  component: AetherUiProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AetherUiProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AetherUiProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
        <h3>Aether UI Components</h3>
        <TextInput
          label="Name"
          placeholder="Enter your name"
        />
        <Button>Submit</Button>
      </div>
    </AetherUiProvider>
  ),
};
