import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Input field variant',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder',
    },
    description: {
      control: 'text',
      description: 'Helper text below input',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example
export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

// Success state
export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    variant: 'success',
    value: 'user@example.com',
    description: 'Email is valid',
  },
};

// Warning state
export const Warning: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    variant: 'warning',
    value: 'user123',
    description: 'Username is available but not recommended',
  },
};

// Error state
export const ErrorExample: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    variant: 'error',
    type: 'password',
    error: 'Password must be at least 8 characters',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot be edited',
    disabled: true,
  },
};

// Required field
export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

// With description
export const WithDescription: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    description: 'Keep it short and meaningful',
  },
};
