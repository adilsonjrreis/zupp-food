import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <View className={`mb-4 ${className}`}>
      <Text className="text-white font-medium mb-1 ml-1">{label}</Text>
      <TextInput
        className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'
          } rounded-xl px-4 py-3 text-gray-800 focus:border-sky-500`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1 ml-1">{error}</Text>}
    </View>
  );
};
