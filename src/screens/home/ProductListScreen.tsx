import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';

// Optional: A dedicated product screen if needed. Unused mostly since we put it in RestaurantDetails
const ProductListScreen: React.FC<NativeStackScreenProps<HomeStackParamList, 'ProductList'>> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Product List</Text>
    </View>
  );
};

export default ProductListScreen;
