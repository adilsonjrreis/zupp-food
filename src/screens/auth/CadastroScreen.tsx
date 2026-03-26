import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { AuthStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Cadastro'>;

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleRegister = () => {
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (!name) {
      newErrors.name = 'Name required';
      valid = false;
    }

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
      // Typically register user, then login or navigate to login
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-6"
      >
        <TouchableOpacity
          className="absolute top-10 left-6 z-10"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-white font-bold">← Voltar</Text>
        </TouchableOpacity>

        <View className="mb-8 mt-10">
          <Text className="text-3xl font-bold text-white mb-2">Criar uma conta</Text>
          <Text className="text-gray-500">Cadastre-se para começar</Text>
        </View>

        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
          error={errors.name}
        />

        <Input
          label="Email"
          placeholder="Digite seu email"
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

        <Button title="Cadastrar" onPress={handleRegister} className="mt-6 mb-6" />

        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600">Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-sky-500 font-bold">Logar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CadastroScreen;
