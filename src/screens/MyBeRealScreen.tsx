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
import { TaggedModal } from '../components/TaggedModal';
import { CURRENT_POST, USERS } from '../data/mock';

const { width: SCREEN_W } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'MyBeReal'>;

export const MyBeRealScreen: React.FC<Props> = ({ navigation }) => {
  const [showTagged, setShowTagged] = useState(false);
  const post = CURRENT_POST;
  const taggedNames = post.taggedFriends.map((id) => USERS[id]?.username).filter(Boolean);

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  };

  return (
    <View style={styles.container}>
      <StatusBar time="2:41" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>My BeReal.</Text>
          <Text style={styles.headerTime}>{formatTime(post.createdAt)}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Photo Card */}
        <View style={styles.photoCard}>
          <Image source={{ uri: post.backImage }} style={styles.backImage} />
          <View style={styles.frontImageContainer}>
            <Image source={{ uri: post.frontImage }} style={styles.frontImage} />
          </View>
        </View>

        {/* Caption */}
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.caption}>{post.caption}</Text>
        </TouchableOpacity>

        {/* Meta pills */}
        <View style={styles.metaRow}>
          <TouchableOpacity
            style={styles.pill}
            onPress={() => navigation.navigate('TagFriends', { mode: 'select', selectedIds: post.taggedFriends })}
          >
            <Ionicons name="person" size={14} color={Colors.text} />
            <Text style={styles.pillText}>{post.taggedFriends.length}</Text>
          </TouchableOpacity>
          <View style={styles.pill}>
            <Ionicons name="refresh" size={14} color={Colors.text} />
            <Text style={styles.pillText}>{post.retakes} retakes</Text>
          </View>
        </View>

        {/* Empty state hint */}
        <View style={styles.emptyHint}>
          <Text style={styles.emptyText}>Wow, it&apos;s really calm in here!</Text>
          <Text style={styles.emptySubtext}>No comments yet.</Text>
        </View>
      </View>

      {/* Tagged friends footer */}
      {taggedNames.length > 0 && (
        <TouchableOpacity style={styles.taggedRow} onPress={() => setShowTagged(true)}>
          <Ionicons name="person" size={16} color={Colors.text} />
          <Text style={styles.taggedText}>{taggedNames.join(',')}</Text>
        </TouchableOpacity>
      )}

      <TaggedModal
        visible={showTagged}
        taggedIds={post.taggedFriends}
        onClose={() => setShowTagged(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    height: 44,
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  headerTime: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  content: {
    alignItems: 'center',
    paddingTop: Spacing.lg,
  },
  photoCard: {
    width: SCREEN_W * 0.55,
    height: SCREEN_W * 0.55 * 1.25,
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
    top: Spacing.sm,
    left: Spacing.sm,
    width: '28%',
    aspectRatio: 0.75,
    borderRadius: Radius.md,
    borderWidth: 2,
    borderColor: Colors.background,
    overflow: 'hidden',
  },
  frontImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  caption: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginTop: Spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.md,
    gap: Spacing.sm,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
    gap: Spacing.sm,
  },
  pillText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  emptyHint: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  emptyText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  emptySubtext: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginTop: Spacing.xs,
  },
  taggedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: Spacing.xxl,
    left: Spacing.lg,
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
    gap: Spacing.sm,
  },
  taggedText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});
