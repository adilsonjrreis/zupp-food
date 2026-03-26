import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { HomeStackParamList } from '../../navigation/types';
import { useCartStore } from '../../store/cartStore';
import { MOCK_PRODUCTS, MOCK_RESTAURANTS } from '../../utils/mocks';

type Props = NativeStackScreenProps<HomeStackParamList, 'RestaurantDetails'>;

const RestaurantDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;
  const restaurant = MOCK_RESTAURANTS.find(r => r.id === id);
  const products = MOCK_PRODUCTS[id] || [];
  const { addItem, items } = useCartStore();

  if (!restaurant) return <Text>Restaurante não encontrado</Text>;

  const cartQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="flex-1">
        <View className="relative">
          <Image source={{ uri: restaurant.imageUrl }} className="w-full h-60" />
          <TouchableOpacity
            className="absolute top-12 left-5 bg-black p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold">← Voltar</Text>
          </TouchableOpacity>
        </View>

        <View className="p-5">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-3xl font-bold text-white">{restaurant.name}</Text>
            <View className="bg-sky-100 px-3 py-1 rounded-full">
              <Text className="text-sky-700 font-bold">⭐ {restaurant.rating}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mb-4">{restaurant.tags.join(' • ')}</Text>

          <View className="flex-row border border-gray-100 p-3 rounded-xl mb-6 bg-gray-900">
            <View className="flex-1 items-center border-r border-gray-200">
              <Text className="text-gray-500 text-xs text-center">Tempo de entrega</Text>
              <Text className="font-bold text-white mt-1">{restaurant.deliveryTime}</Text>
            </View>
            <View className="flex-1 items-center border-r border-gray-200">
              <Text className="text-gray-500 text-xs text-center">Taxa de entrega</Text>
              <Text className="font-bold text-white mt-1">R$ {restaurant.deliveryFee.toFixed(2)}</Text>
            </View>
          </View>

          <Text className="text-xl font-bold text-white mb-4">Visualização do menu</Text>

          {products.map((product) => (
            <View key={product.id} className="flex-row border-b border-gray-100 py-4">
              <View className="flex-1 pr-4">
                <Text className="text-lg font-bold text-white mb-1">{product.name}</Text>
                <Text className="text-gray-500 text-sm mb-2" numberOfLines={2}>{product.description}</Text>
                <Text className="text-sky-500 font-bold">R$ {product.price.toFixed(2)}</Text>
              </View>
              <View className="items-end justify-between">
                <Image source={{ uri: product.imageUrl }} className="w-24 h-24 rounded-xl" />
                <TouchableOpacity
                  className="bg-gray-100 px-4 py-2 mt-[-15px] rounded-full border border-gray-200"
                  onPress={() => addItem(product)}
                >
                  <Text className="text-sky-500 font-bold">Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Cart Button if items exist */}
      {cartQuantity > 0 && (
        <View className="absolute bottom-5 left-5 right-5">
          <Button
            title={`Ver Carrinho (${cartQuantity}) • R$ ${cartTotal.toFixed(2)}`}
            onPress={() => navigation.getParent()?.navigate('Carrinho')}
          />
        </View>
      )}
    </View>
  );
};

export default RestaurantDetailsScreen;
