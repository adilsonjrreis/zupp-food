import React from 'react';
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <View
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};

interface TouchableCardProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export const TouchableCard: React.FC<TouchableCardProps> = ({ children, className = '', ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
