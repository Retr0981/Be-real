import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { Colors, Radius, Spacing } from '../constants/theme';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const PHOTO_CARDS = [
  {
    uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop',
    style: { top: SCREEN_H * 0.12, left: 18, transform: [{ rotate: '-8deg' }] },
  },
  {
    uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
    style: { top: SCREEN_H * 0.22, right: 22, transform: [{ rotate: '10deg' }] },
  },
  {
    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
    style: { top: SCREEN_H * 0.42, left: 36, transform: [{ rotate: '5deg' }] },
  },
];

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate auth network call then navigate to the main feed.
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Home');
    }, 800);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1200&fit=crop',
      }}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Decorative floating photos */}
          {PHOTO_CARDS.map((photo, index) => (
            <View key={index} style={[styles.photoCard, photo.style]}>
              <Image source={{ uri: photo.uri }} style={styles.photoCardImage} />
            </View>
          ))}

          <View style={styles.header}>
            <Text style={styles.logo}>BeReal.</Text>
            <Text style={styles.tagline}>Your friends, for real.</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Welcome back</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color={Colors.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email or phone number"
                placeholderTextColor={Colors.textMuted}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color={Colors.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor={Colors.textMuted}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword((prev) => !prev)}
                style={styles.eyeBtn}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={Colors.textSecondary}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.85}>
              <Text style={styles.loginBtnText}>
                {isLoading ? 'Logging in...' : 'Log In'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.footerLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  keyboard: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl + 20,
    paddingTop: SCREEN_H * 0.08,
  },
  photoCard: {
    position: 'absolute',
    width: 92,
    height: 120,
    borderRadius: Radius.md,
    backgroundColor: Colors.text,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  photoCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: Radius.sm,
    resizeMode: 'cover',
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logo: {
    color: Colors.text,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1.5,
  },
  tagline: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginTop: Spacing.xs,
    fontWeight: '500',
  },
  form: {
    width: '100%',
    backgroundColor: 'rgba(20, 20, 20, 0.82)',
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: Spacing.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputIcon: {
    marginRight: Spacing.sm,
  },
  input: {
    flex: 1,
    height: 52,
    color: Colors.text,
    fontSize: 16,
  },
  passwordInput: {
    paddingRight: 36,
  },
  eyeBtn: {
    padding: Spacing.sm,
  },
  loginBtn: {
    height: 54,
    borderRadius: Radius.lg,
    backgroundColor: Colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  loginBtnText: {
    color: Colors.background,
    fontSize: 17,
    fontWeight: '800',
  },
  forgotBtn: {
    alignSelf: 'center',
    marginTop: Spacing.md,
  },
  forgotText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 15,
  },
  footerLink: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
});
