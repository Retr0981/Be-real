# BeReal Clone — Agent Notes

## Project Overview
Pixel-perfect React Native clone of the BeReal app, bootstrapped with Expo SDK 57 and TypeScript.

## Tech Stack
- **Framework:** Expo SDK 57 + React Native 0.86 + React 19
- **Language:** TypeScript (strict)
- **Navigation:** React Navigation v7 (native stack)
- **Icons:** `@expo/vector-icons` (Ionicons)
- **Styling:** React Native StyleSheet only (no extra UI libs)
- **Platforms:** iOS, Android, Web

## Folder Structure
```
src/
  components/    # Reusable UI pieces (Avatar, PostCard, modals, etc.)
  constants/     # Colors, fonts, spacing, radii
  data/          # Mock users, posts, comments
  navigation/    # AppNavigator (native stack)
  screens/       # One file per screen
  types/         # Shared TypeScript types
  utils/         # Helpers (empty for now)
```

## Available Scripts
```bash
npm start        # Start Expo dev server
npm run android  # Start on Android
npm run ios      # Start on iOS
npm run web      # Start on web
```

## Conventions
- Black background (`#000000`) is the default app background.
- All text defaults to white; secondary text uses `Colors.textSecondary`.
- Rounded photo cards use `Radius.xl` (20px) with front-camera overlay in top-left.
- Use the exported `Colors`, `Spacing`, `Radius` theme tokens for consistency.
- Mock data lives in `src/data/mock.ts`; replace with real API later.

## iOS / Xcode Simulator Notes
- `app.json` includes a valid iOS `bundleIdentifier` (`com.david.bereal`) and Android `package`.
- Native dependencies are pinned to Expo SDK 57 compatible versions:
  - `react-native-gesture-handler`: `~2.32.0`
  - `react-native-safe-area-context`: `~5.7.0`
  - `react-native-screens`: `4.25.2`
  - `expo-font`: installed as a peer dependency of `@expo/vector-icons`
- Run `npx expo start --ios` to launch in the iOS simulator via Expo Go or a development build.

## Auth Flow
The app now starts on the **Login** screen (`src/screens/LoginScreen.tsx`).
- Users can navigate to **Sign Up** (`src/screens/SignUpScreen.tsx`).
- After successful login or sign-up, the app replaces the stack with **Home** (`src/screens/HomeScreen.tsx`).
- The old lock-screen entry point has been removed.

## Current Stage
Stage 2: iOS simulator compatibility fixes, Expo SDK 57 dependency alignment, and auth entry flow (Login / Sign Up) implemented.
