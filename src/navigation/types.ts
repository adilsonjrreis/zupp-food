import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Cadastro: undefined;
};

export type HomeStackParamList = {
  HomeList: undefined;
  RestaurantDetails: { id: string };
  ProductList: { restaurantId: string };
};

export type MainTabsParamList = {
  Início: NavigatorScreenParams<HomeStackParamList>;
  Carrinho: undefined;
  Perfil: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabsParamList>;
};
