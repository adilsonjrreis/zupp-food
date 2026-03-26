import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { AuthStackParamList } from '../../navigation/types';
import { useAuthStore } from '../../store/authStore';
import { useUserStore } from '../../store/userStore';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const { login } = useAuthStore();
  const { setProfile } = useUserStore();

  const handleLogin = () => {
    // Basic Validation
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalid';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Mock Login logic
      login('fake-jwt-token-12345');
      setProfile({
        id: 'user-1',
        name: 'Adilson Junior',
        email: email,
      });
      // Will auto-navigate to MainTabs via RootNavigator
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-6"
      >
        <View className="mb-10 text-center items-center">
          <Text className="text-3xl font-bold text-sky-500 mb-2">Zupp Food</Text>
          <Text className="text-white">Faça login para continuar o pedido.</Text>
        </View>

        <Input
          label="Email"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <View className="items-end mb-6">
          <TouchableOpacity>
            <Text className="text-sky-500 font-medium text-sm">Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <Button title="Entrar" onPress={handleLogin} className="mb-6" />

        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600">Não tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text className="text-sky-500 font-bold">Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
