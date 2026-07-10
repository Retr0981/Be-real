import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Post } from '../types';
import { Colors, Radius, Spacing } from '../constants/theme';
import { Avatar } from './Avatar';
import { USERS } from '../data/mock';

const { width: SCREEN_W } = Dimensions.get('window');

interface PostCardProps {
  post: Post;
  showComments?: boolean;
  onOpenComments?: () => void;
  onOpenTagged?: () => void;
  onOpenReactions?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  showComments = true,
  onOpenComments,
  onOpenTagged,
  onOpenReactions,
}) => {
  const taggedNames = post.taggedFriends.map((id) => USERS[id]?.username).filter(Boolean);

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar uri={post.avatar} size={40} />
        <View style={styles.headerText}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.timestamp}>{formatTime(post.createdAt)}</Text>
        </View>
        <TouchableOpacity style={styles.moreBtn}>
          <Ionicons name="ellipsis-horizontal" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      {/* Photo Card */}
      <View style={styles.photoCard}>
        <Image source={{ uri: post.backImage }} style={styles.backImage} />
        <View style={styles.frontImageContainer}>
          <Image source={{ uri: post.frontImage }} style={styles.frontImage} />
        </View>

        {/* Right-side action buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn} onPress={onOpenComments}>
            <Ionicons name="chatbubble" size={28} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={onOpenReactions}>
            <Ionicons name="happy-outline" size={30} color={Colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tagged friends / retakes row */}
      <View style={styles.metaRow}>
        {taggedNames.length > 0 ? (
          <TouchableOpacity style={styles.tagPill} onPress={onOpenTagged}>
            <Ionicons name="person" size={14} color={Colors.text} style={styles.tagIcon} />
            <Text style={styles.tagText}>{taggedNames.join(',')}</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Comment input */}
      {showComments ? (
        <TouchableOpacity style={styles.commentRow} onPress={onOpenComments} activeOpacity={0.7}>
          <Text style={styles.commentPlaceholder}>Add a comment...</Text>
          <View style={styles.sendCircle}>
            <Ionicons name="play" size={14} color={Colors.background} />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },
  headerText: {
    marginLeft: Spacing.md,
    flex: 1,
  },
  username: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  timestamp: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  moreBtn: {
    padding: Spacing.sm,
  },
  photoCard: {
    width: SCREEN_W - Spacing.lg * 2,
    height: (SCREEN_W - Spacing.lg * 2) * 1.25,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    alignSelf: 'center',
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
    backgroundColor: Colors.surface,
  },
  frontImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  actions: {
    position: 'absolute',
    right: Spacing.md,
    bottom: Spacing.md,
    alignItems: 'center',
    gap: Spacing.md,
  },
  actionBtn: {
    width: 44,
    height: 44,
    borderRadius: Radius.full,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md,
    gap: Spacing.sm,
  },
  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.md,
  },
  tagIcon: {
    marginRight: Spacing.sm,
  },
  tagText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md,
  },
  commentPlaceholder: {
    color: Colors.textMuted,
    fontSize: 16,
  },
  sendCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
