export interface User {
  id: string;
  username: string;
  displayName?: string;
  avatar: string;
  isFriend: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
}

export interface Reaction {
  id: string;
  userId: string;
  emoji: string;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  frontImage: string;
  backImage: string;
  caption?: string;
  taggedFriends: string[]; // userIds
  retakes: number;
  createdAt: string;
  location?: string;
  comments: Comment[];
  reactions: Reaction[];
  privacy: 'friends' | 'public' | 'discovery';
}

export type HomeTab = 'friends' | 'fof' | 'discovery';

export type RootStackParamList = {
  LockScreen: undefined;
  Main: undefined;
  Home: undefined;
  MyBeReal: undefined;
  Comments: { postId: string };
  Post: undefined;
  PostEnd: { postId: string };
  TagFriends: { mode?: 'select' | 'view'; selectedIds?: string[] };
};
