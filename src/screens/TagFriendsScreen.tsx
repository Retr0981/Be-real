import React, { useState } from 'react';
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
import { TagFriendsGrid } from '../components/TagFriendsGrid';

const { width: SCREEN_W } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'TagFriends'>;

export const TagFriendsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { selectedIds = [] } = route.params ?? {};
  const [selected, setSelected] = useState<string[]>(selectedIds);

  const toggleFriend = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

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
          <Text style={styles.countdown}>01:26</Text>
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
        </View>
      </View>

      {/* Tag sheet */}
      <TagFriendsGrid
        selectedIds={selected}
        onToggle={toggleFriend}
        onConfirm={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
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
});
