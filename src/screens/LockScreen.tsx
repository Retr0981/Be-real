import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { Colors, Radius, Spacing } from '../constants/theme';
import { StatusBar } from '../components/StatusBar';
import { CURRENT_USER } from '../data/mock';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'LockScreen'>;

export const LockScreen: React.FC<Props> = ({ navigation }) => {
  const [countdown, setCountdown] = useState('01:59:42');

  useEffect(() => {
    // Simulated countdown for the lock screen notification.
    const interval = setInterval(() => {
      setCountdown((prev) => {
        const [h, m, s] = prev.split(':').map(Number);
        let total = h * 3600 + m * 60 + s;
        total = Math.max(0, total - 1);
        const hh = Math.floor(total / 3600).toString().padStart(2, '0');
        const mm = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
        const ss = (total % 60).toString().padStart(2, '0');
        return `${hh}:${mm}:${ss}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar time="2:41" />

      <View style={styles.wallpaper}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c8d8d3?w=800&h=1200&fit=crop' }}
          style={styles.wallpaperImage}
          blurRadius={4}
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.content}>
        <View style={styles.notification}>
          <View style={styles.appIcon}>
            <Text style={styles.appIconText}>B.</Text>
          </View>
          <View style={styles.notifText}>
            <Text style={styles.notifTitle}>BeReal.</Text>
            <Text style={styles.notifSubtitle}>Time to BeReal. {countdown} left to capture a BeReal.</Text>
          </View>
          <Text style={styles.notifTime}>2m ago</Text>
        </View>

        <View style={styles.lockInfo}>
          <Text style={styles.date}>Monday, July 6</Text>
          <Text style={styles.time}>2:41</Text>
        </View>
      </View>

      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="flashlight" size={22} color={Colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconBtn, styles.unlockBtn]}
          onPress={() => navigation.replace('Home')}
        >
          <Ionicons name="arrow-up" size={24} color={Colors.background} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="camera" size={22} color={Colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wallpaper: {
    ...StyleSheet.absoluteFill,
  },
  wallpaperImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },
  notification: {
    marginTop: SCREEN_H * 0.08,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: Radius.lg,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: Colors.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconText: {
    color: Colors.background,
    fontSize: 20,
    fontWeight: '900',
  },
  notifText: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  notifTitle: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  notifSubtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    lineHeight: 18,
  },
  notifTime: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  lockInfo: {
    alignItems: 'center',
    marginTop: SCREEN_H * 0.08,
  },
  date: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 22,
    fontWeight: '500',
  },
  time: {
    color: Colors.text,
    fontSize: 78,
    fontWeight: '200',
    letterSpacing: -2,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    paddingBottom: SCREEN_H * 0.06,
  },
  iconBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unlockBtn: {
    backgroundColor: Colors.text,
  },
});
