import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, HomeTab } from '../types';
import { Colors, Spacing } from '../constants/theme';
import { StatusBar } from '../components/StatusBar';
import { PostCard } from '../components/PostCard';
import { TaggedModal } from '../components/TaggedModal';
import { POSTS } from '../data/mock';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const TABS: { key: HomeTab; label: string }[] = [
  { key: 'friends', label: 'My Friends' },
  { key: 'fof', label: 'Friends of Friends' },
  { key: 'discovery', label: 'Discovery' },
];

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<HomeTab>('friends');
  const [taggedModalPostId, setTaggedModalPostId] = useState<string | null>(null);

  const taggedPost = POSTS.find((p) => p.id === taggedModalPostId);

  return (
    <View style={styles.container}>
      <StatusBar time="2:42" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <Ionicons name="camera-outline" size={26} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.logo}>BeReal.</Text>
        <TouchableOpacity>
          <Ionicons name="person-add-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tab}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      >
        {POSTS.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onOpenComments={() => navigation.navigate('Comments', { postId: post.id })}
            onOpenTagged={() => setTaggedModalPostId(post.id)}
          />
        ))}
      </ScrollView>

      <TaggedModal
        visible={!!taggedPost}
        taggedIds={taggedPost?.taggedFriends ?? []}
        onClose={() => setTaggedModalPostId(null)}
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
  logo: {
    color: Colors.text,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
    gap: Spacing.lg,
  },
  tab: {
    paddingVertical: Spacing.sm,
  },
  tabText: {
    color: Colors.textMuted,
    fontSize: 16,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.text,
  },
  feed: {
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
  },
});
