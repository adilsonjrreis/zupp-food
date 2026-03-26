import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // só navega dentro do AuthStack
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-sky-500 text-4xl font-bold mb-4">Zupp</Text>
      <Text className="text-sky-100 text-lg mb-8">Entregando Felicidade</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default SplashScreen;