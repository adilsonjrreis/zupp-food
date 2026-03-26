# Food Delivery App 🍔

A production-ready React Native prototype for a Food Delivery app. 
Built using **Expo**, **TypeScript**, **Zustand**, and **NativeWind** (Tailwind CSS for React Native).

## 🚀 Technical Stack
- **Framework:** Expo
- **Language:** TypeScript
- **State Management:** Zustand + AsyncStorage for data persistence
- **Navigation:** React Navigation (Stack and Bottom Tabs)
- **Styling:** NativeWind (Tailwind CSS v3)

## 📁 Architecture
- `/src/components` - Reusable UI widgets (`Button`, `Input`, `Card`)
- `/src/navigation` - Handlers for `AuthStack` and `MainTabs`
- `/src/store` - Global state setup with Zustand
- `/src/screens` - Isolated app modules for Auth, Home, Cart, and Profile
- `/src/utils` - Mock backend data

## 💻 Running the App on Android (Local Emulator)

Assuming you have your Android environment (Android SDK, Emulator, Node.js) configured:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Application**
   ```bash
   npx expo run:android
   ```
   *This command will build the app and install it on your running emulator or connected device.*

## 🤝 Known Setup Notes
- Due to the usage of NativeWind v4, make sure the `babel.config.js` and `metro.config.js` remain intact as they use the `react-native-reanimated` plugin and NativeWind configs.
- State is persisted automatically: logging in will persist across app reloads.
