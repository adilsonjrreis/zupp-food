import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';
import { useAuthStore } from '../../store/authStore';
import { useUserStore } from '../../store/userStore';

const ProfileScreen: React.FC = () => {
  const { logout } = useAuthStore();
  const { profile, clearProfile } = useUserStore();

  const handleLogout = () => {
    clearProfile();
    logout();
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-5 bg-black border-b border-gray-100">
        <Text className="text-2xl font-bold text-white mb-6">Perfil</Text>

        <View className="flex-row items-center mb-6">
          <View className="w-20 h-20 bg-sky-100 rounded-full items-center justify-center mr-4 border-2 border-sky-200">
            <Text className="text-3xl font-bold text-sky-500">
              {profile?.name?.charAt(0) || 'U'}
            </Text>
          </View>
          <View>
            <Text className="text-xl font-bold text-white">{profile?.name || 'User Name'}</Text>
            <Text className="text-gray-500">{profile?.email || 'user@example.com'}</Text>
          </View>
        </View>
      </View>

      <View className="p-5 pt-6">
        <Text className="text-gray-500 font-bold mb-4 uppercase tracking-wider text-sm">Configurações de Conta</Text>

        <View className="bg-black rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          {['Personal Information', 'Delivery Addresses', 'Payment Methods', 'Order History'].map((item, i) => (
            <TouchableOpacity
              key={item}
              className={`p-4 flex-row justify-between items-center ${i !== 3 ? 'border-b border-gray-100' : ''
                }`}
            >
              <Text className="text-white font-medium">{item}</Text>
              <Text className="text-gray-400">›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button
          title="Sair"
          variant="outline"
          onPress={handleLogout}
          className="mt-4"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
