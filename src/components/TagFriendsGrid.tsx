import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Radius, Spacing } from '../constants/theme';
import { Avatar } from './Avatar';
import { FRIENDS_LIST, USERS } from '../data/mock';

const { width: SCREEN_W } = Dimensions.get('window');
const ITEMS_PER_ROW = 4;
const ITEM_WIDTH = (SCREEN_W - Spacing.lg * 2 - Spacing.md * (ITEMS_PER_ROW - 1)) / ITEMS_PER_ROW;

interface TagFriendsGridProps {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onConfirm: () => void;
}

export const TagFriendsGrid: React.FC<TagFriendsGridProps> = ({
  selectedIds,
  onToggle,
  onConfirm,
}) => {
  const hasSelection = selectedIds.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tag your friends</Text>
        <TouchableOpacity style={styles.closeBtn}>
          <Ionicons name="close" size={22} color={Colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {FRIENDS_LIST.map((user) => {
          const selected = selectedIds.includes(user.id);
          return (
            <TouchableOpacity
              key={user.id}
              style={styles.userItem}
              onPress={() => onToggle(user.id)}
              activeOpacity={0.7}
            >
              <Avatar uri={user.avatar} size={ITEM_WIDTH * 0.7} selected={selected} />
              {selected && (
                <View style={styles.checkmark}>
                  <Ionicons name="checkmark" size={12} color={Colors.background} />
                </View>
              )}
              <Text style={styles.username}>{user.username}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, hasSelection ? styles.buttonActive : styles.buttonInactive]}
        onPress={onConfirm}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, !hasSelection && styles.buttonTextInactive]}>
          {hasSelection ? 'Add to your BeReal' : 'Cancel'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xl,
    maxHeight: '85%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '600',
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: Spacing.lg,
    gap: Spacing.md,
  },
  userItem: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  checkmark: {
    position: 'absolute',
    top: ITEM_WIDTH * 0.05,
    right: ITEM_WIDTH * 0.05,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.text,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: Colors.text,
    fontSize: 13,
    marginTop: Spacing.sm,
  },
  button: {
    height: 52,
    borderRadius: Radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  buttonActive: {
    backgroundColor: Colors.text,
  },
  buttonInactive: {
    backgroundColor: Colors.surfaceLight,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '700',
  },
  buttonTextInactive: {
    color: Colors.text,
  },
});
