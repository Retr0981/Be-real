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

const { width: SCREEN_W } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Post'>;

export const PostScreen: React.FC<Props> = ({ navigation }) => {
  const [countdown, setCountdown] = useState('01:19');
  const [privacy, setPrivacy] = useState<'friends' | 'public'>('friends');
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        const [m, s] = prev.split(':').map(Number);
        let total = m * 60 + s;
        total = Math.max(0, total - 1);
        const mm = Math.floor(total / 60).toString().padStart(2, '0');
        const ss = (total % 60).toString().padStart(2, '0');
        return `${mm}:${ss}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar time="2:41" />

      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-down" size={28} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.titleBlock}>
          <Text style={styles.logo}>BeReal.</Text>
          <Text style={styles.countdown}>{countdown}</Text>
        </View>
        <View style={{ width: 28 }} />
      </View>

      {/* Preview */}
      <View style={styles.preview}>
        <View style={styles.photoCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c8d8d3?w=800&h=1200&fit=crop' }}
            style={styles.backImage}
          />
          <View style={styles.frontImageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face' }}
              style={styles.frontImage}
            />
          </View>
          <TouchableOpacity style={styles.retakeClose}>
            <Ionicons name="close" size={20} color={Colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlPill}
          onPress={() => navigation.navigate('TagFriends', { mode: 'select' })}
        >
          <Ionicons name="person" size={16} color={Colors.text} />
          <Text style={styles.controlText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlPillWide}
          onPress={() => setPrivacy(privacy === 'friends' ? 'public' : 'friends')}
        >
          <Ionicons name="people" size={16} color={Colors.text} />
          <Text style={styles.controlText}>
            {privacy === 'friends' ? 'My friends only' : 'Discovery'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlPill} onPress={() => setLocation(!location)}>
          <Ionicons name={location ? 'location' : 'location-outline'} size={16} color={Colors.text} />
          <Text style={styles.controlText}>{location ? 'On' : 'Off'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlPill}>
          <Ionicons name="musical-notes" size={16} color={Colors.text} />
        </TouchableOpacity>
      </View>

      {/* Send button */}
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={() => navigation.replace('PostEnd', { postId: 'p-new' })}
      >
        <Text style={styles.sendText}>SEND</Text>
        <Ionicons name="play" size={28} color={Colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    height: 44,
  },
  titleBlock: {
    alignItems: 'center',
  },
  logo: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  countdown: {
    color: Colors.text,
    fontSize: 26,
    fontWeight: '700',
    marginTop: 2,
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoCard: {
    width: SCREEN_W - Spacing.lg * 2,
    height: (SCREEN_W - Spacing.lg * 2) * 1.25,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    backgroundColor: Colors.surface,
  },
  backImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  frontImageContainer: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    width: '28%',
    aspectRatio: 0.75,
    borderRadius: Radius.lg,
    borderWidth: 3,
    borderColor: Colors.background,
    overflow: 'hidden',
  },
  frontImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  retakeClose: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  controlPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(40,40,40,0.85)',
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    borderRadius: Radius.lg,
    minWidth: 44,
    gap: Spacing.sm,
  },
  controlPillWide: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(40,40,40,0.85)',
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    borderRadius: Radius.lg,
    gap: Spacing.sm,
  },
  controlText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  sendBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xxl,
    gap: Spacing.sm,
  },
  sendText: {
    color: Colors.text,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1,
  },
});
