import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, Comment } from '../types';
import { Colors, Radius, Spacing } from '../constants/theme';
import { StatusBar } from '../components/StatusBar';
import { Avatar } from '../components/Avatar';
import { CURRENT_POST } from '../data/mock';

type Props = NativeStackScreenProps<RootStackParamList, 'Comments'>;

export const CommentsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { postId } = route.params;
  const post = CURRENT_POST; // In a real app fetch by postId
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      userId: 'me',
      username: 'simon',
      avatar: post.avatar,
      text: input.trim(),
      createdAt: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <StatusBar time="2:41" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Comments</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {comments.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Wow, it&apos;s really calm in here!</Text>
            <Text style={styles.emptySubtext}>No comments yet.</Text>
          </View>
        ) : (
          comments.map((comment) => (
            <View key={comment.id} style={styles.commentRow}>
              <Avatar uri={comment.avatar} size={36} />
              <View style={styles.commentBody}>
                <Text style={styles.commentUser}>{comment.username}</Text>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          placeholderTextColor={Colors.textMuted}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity
          style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
          onPress={handleSend}
          disabled={!input.trim()}
        >
          <Ionicons name="play" size={16} color={input.trim() ? Colors.text : Colors.textMuted} />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    height: 44,
  },
  title: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  list: {
    padding: Spacing.lg,
    flexGrow: 1,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
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
  commentRow: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  commentBody: {
    marginLeft: Spacing.md,
    flex: 1,
  },
  commentUser: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  commentText: {
    color: Colors.text,
    fontSize: 15,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  input: {
    flex: 1,
    color: Colors.text,
    fontSize: 16,
    paddingVertical: Spacing.sm,
  },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Spacing.md,
  },
  sendBtnDisabled: {
    opacity: 0.6,
  },
});
