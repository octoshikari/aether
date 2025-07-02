import {
  TextInput as MantineTextInput,
  type TextInputProps as MantineTextInputProps,
} from '@mantine/core';
import { forwardRef } from 'react';

export interface TextInputProps extends MantineTextInputProps {
  /**
   * Input field variant for FHIR-specific styles
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';
}

/**
 * Aether text input field with FHIR-specific styles
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant = 'default', error, ...props }, ref) => {
    // Define color and error message based on the variant
    let errorMessage = error;
    let inputColor: string | undefined;

    switch (variant) {
      case 'success':
        inputColor = 'green';
        break;
      case 'warning':
        inputColor = 'yellow';
        errorMessage = errorMessage || 'Warning';
        break;
      case 'error':
        inputColor = 'red';
        errorMessage = errorMessage || 'Error';
        break;
      default:
        inputColor = undefined;
    }

    return (
      <MantineTextInput
        error={errorMessage}
        ref={ref}
        styles={(theme) => ({
          input: {
            borderColor: inputColor ? theme.colors[inputColor][6] : undefined,
            '&:focus': {
              borderColor: inputColor ? theme.colors[inputColor][7] : undefined,
            },
          },
        })}
        {...props}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
