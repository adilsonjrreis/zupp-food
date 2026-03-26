import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  isLoading = false,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-sky-500';
      case 'secondary':
        return 'bg-gray-200';
      case 'outline':
        return 'bg-transparent border border-sky-500';
      default:
        return 'bg-sky-500';
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'primary':
        return 'text-white';
      case 'secondary':
        return 'text-gray-800';
      case 'outline':
        return 'text-sky-500';
      default:
        return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      className={`h-14 rounded-xl flex items-center justify-center ${getVariantStyles()} ${props.disabled ? 'opacity-50' : ''
        } ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#0ea5e9'} />
      ) : (
        <Text className={`font-semibold text-lg ${getTextStyles()}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
