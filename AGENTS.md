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

## Current Stage
Stage 1 complete: project foundation, navigation, theme, mock data, and all core screens scaffolded.
