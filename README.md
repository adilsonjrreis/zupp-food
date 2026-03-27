🍔 Food Delivery App

Aplicativo de delivery desenvolvido em React Native, pronto para uso como protótipo de produção.
Construído com foco em performance, organização e escalabilidade.

🚀 Tecnologias Utilizadas
Framework: Expo
Linguagem: TypeScript
Gerenciamento de Estado: Zustand + AsyncStorage (persistência local)
Navegação: React Navigation (Stack + Bottom Tabs)
Estilização: NativeWind (Tailwind CSS para React Native)
🔐 Acesso de Teste

Para facilitar a avaliação do app, utilize:

📧 Email: teste@teste.com
🔑 Senha: 123456
📁 Estrutura do Projeto
/src/components → Componentes reutilizáveis (Button, Input, Card)
/src/navigation → Configuração de rotas (AuthStack e MainTabs)
/src/store → Gerenciamento de estado global com Zustand
/src/screens → Telas da aplicação (Auth, Home, Carrinho, Perfil)
/src/utils → Dados mockados simulando backend
💻 Como rodar o app no Android

Antes de iniciar, certifique-se de que você possui:

Android Studio configurado (SDK + Emulador)
Node.js instalado
1. Instalar dependências
npm install
2. Rodar o aplicativo
npx expo run:android

👉 Esse comando irá:

Compilar o app
Instalar automaticamente no emulador ou dispositivo conectado
⚙️ Observações Importantes
O projeto utiliza NativeWind, então mantenha intactos os arquivos:
babel.config.js
metro.config.js
O estado da aplicação é persistido:
Após login, os dados permanecem salvos mesmo ao reiniciar o app
🎯 Objetivo

Este projeto foi desenvolvido como base para aplicações reais de delivery, podendo ser facilmente adaptado para produção com integração a APIs e serviços externos.
