import { SuccessModal } from '@/src/components/ui/SuccessModal';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';
import { useCartStore } from '../../store/cartStore';

const CartScreen: React.FC = () => {
  const { items, removeItem, addItem, clearCart, getTotalPrice } = useCartStore();
  const [successVisible, setSuccessVisible] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) return;
    setSuccessVisible(true);
  };

  if (items.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center p-5">
        <Text className="text-2xl font-bold text-white mb-2">Carrinho Vazio</Text>
        <Text className="text-gray-500 text-center">Adicione comida do seu restaurante favorito.</Text>
      </SafeAreaView>
    );
  }

  const deliveryFee = 5.99; // Mock static delivery fee
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-5 bg-black border-b border-gray-700 flex-row justify-between items-center">
        <Text className="text-xl font-bold text-white">Seu carrinho</Text>
        <TouchableOpacity onPress={clearCart}>
          <Text className="text-sky-500 font-bold">Limpar tudo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        className="px-5 pt-4"
        renderItem={({ item }) => (
          <View className="bg-black p-4 rounded-xl mb-4 shadow-sm flex-row items-center border border-gray-700">
            <Image source={{ uri: item.imageUrl }} className="w-16 h-16 rounded-lg mr-4" />
            <View className="flex-1">
              <Text className="font-bold text-white">{item.name}</Text>
              <Text className="text-sky-500 font-bold">${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center bg-gray-500 rounded-full w-24 justify-between p-1">
              <TouchableOpacity
                className="w-8 h-8 items-center justify-center bg-white rounded-full shadow-sm"
                onPress={() => removeItem(item.id)}
              >
                <Text className="font-bold text-gray-600 text-lg">-</Text>
              </TouchableOpacity>
              <Text className="font-bold text-gray-900">{item.quantity}</Text>
              <TouchableOpacity
                className="w-8 h-8 items-center justify-center bg-sky-500 rounded-full shadow-sm"
                onPress={() => addItem(item)}
              >
                <Text className="font-bold text-white text-lg">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View className="bg-black p-5 border-t border-gray-700 rounded-t-3xl shadow-lg">
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-500">Subtotal</Text>
          <Text className="font-bold text-white">R$ {subtotal.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between mb-4">
          <Text className="text-gray-500">Taxa de entrega</Text>
          <Text className="font-bold text-white">R$ {deliveryFee.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between mb-6 border-t border-gray-700 pt-4">
          <Text className="text-xl font-bold text-white">Total</Text>
          <Text className="text-xl font-bold text-sky-500">R$ {total.toFixed(2)}</Text>
        </View>

        <Button title="Confirmar Pedido" onPress={handleCheckout} />
      </View>
      <SuccessModal
        visible={successVisible}
        onClose={() => {
          setSuccessVisible(false);
          clearCart();
        }}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
