import { Button as MantineButton, type ButtonProps as MantineButtonProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface ButtonProps extends MantineButtonProps {
  /**
   * Button variant for FHIR-specific actions
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'link';
}

/**
 * Aether button with FHIR-specific styles
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', ...props }, ref) => {
    // Mapping variants to Mantine styles
    const variantMap: Record<string, MantineButtonProps['variant']> = {
      default: 'default',
      primary: 'filled',
      secondary: 'outline',
      success: 'filled',
      warning: 'filled',
      danger: 'filled',
      link: 'subtle',
    };

    // Mapping variants to colors
    const colorMap: Record<string, MantineButtonProps['color']> = {
      default: 'gray',
      primary: 'blue',
      secondary: 'blue',
      success: 'green',
      warning: 'yellow',
      danger: 'red',
      link: 'blue',
    };

    return (
      <MantineButton
        color={colorMap[variant]}
        radius="md"
        ref={ref}
        variant={variantMap[variant]}
        {...props}
      >
        {children}
      </MantineButton>
    );
  },
);

Button.displayName = 'Button';
