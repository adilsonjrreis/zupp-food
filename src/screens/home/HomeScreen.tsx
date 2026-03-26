import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableCard } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { HomeStackParamList } from '../../navigation/types';
import { MOCK_RESTAURANTS } from '../../utils/mocks';

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeList'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="px-5 pt-4 pb-2 bg-black flex-row justify-between items-center shadow-sm z-10 border-b border-gray-700">
        <View>
          <Text className="text-white text-sm">Entregando em</Text>
          <Text className="text-sky-500 font-bold text-lg">Seu Endereço ▾</Text>
        </View>
        <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center">
          <Text className="text-gray-600 font-bold">AJ</Text>
        </View>
      </View>

      <FlatList
        className="px-5 pt-4"
        data={MOCK_RESTAURANTS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View className="mb-6">
            <Text className="text-2xl font-bold text-white mb-4">O que você gostaria de comer?</Text>
            <Input label="" placeholder="Pesquise restaurantes ou comidas..." />
            <Text className="text-lg font-bold text-white mt-4 mb-2">Restaurantes Populares</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableCard
            className="mb-6"
            onPress={() => navigation.navigate('RestaurantDetails', { id: item.id })}
          >
            <Image
              source={{ uri: item.imageUrl }}
              className="w-full h-40"
              resizeMode="cover"
            />
            <View className="p-4">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-lg font-bold text-gray-900">{item.name}</Text>
                <View className="bg-sky-100 px-2 py-1 rounded-full flex-row items-center">
                  <Text className="text-sky-700 font-bold text-xs">⭐ {item.rating}</Text>
                </View>
              </View>
              <Text className="text-gray-500 text-sm mb-2">{item.tags.join(' • ')}</Text>
              <View className="flex-row justify-between border-t border-gray-100 pt-3 mt-1">
                <Text className="text-gray-600 text-sm">🚚 {item.deliveryTime}</Text>
                <Text className="text-gray-600 text-sm">R${item.deliveryFee.toFixed(2)} entrega</Text>
              </View>
            </View>
          </TouchableCard>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
