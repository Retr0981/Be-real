import { Comment, Post, User } from '../types';

const AVATARS = {
  simon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  edrt: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  djemdooms: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face',
  kronomsc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face',
  johndoit: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=face',
  m4thi4s40: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&crop=face',
  jobe100: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop&crop=face',
  vaness4: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  xtrmblt: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop&crop=face',
  bound2relax: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
  donastro: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  mathilde00: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
  elizabooth: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
  julesprm8: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
};

export const CURRENT_USER: User = {
  id: 'me',
  username: 'simon',
  displayName: 'Simon',
  avatar: AVATARS.simon,
  isFriend: true,
};

export const USERS: Record<string, User> = {
  simon: CURRENT_USER,
  edrt: { id: 'edrt', username: 'e.drt', avatar: AVATARS.edrt, isFriend: true },
  djemdooms: { id: 'djemdooms', username: 'djemdooms', avatar: AVATARS.djemdooms, isFriend: true },
  kronomsc: { id: 'kronomsc', username: 'kronomsc', avatar: AVATARS.kronomsc, isFriend: true },
  johndoit: { id: 'johndoit', username: 'johndoit', avatar: AVATARS.johndoit, isFriend: true },
  m4thi4s40: { id: 'm4thi4s40', username: 'm4thi4s40', avatar: AVATARS.m4thi4s40, isFriend: true },
  jobe100: { id: 'jobe100', username: 'jobe100', avatar: AVATARS.jobe100, isFriend: true },
  vaness4: { id: 'vaness4', username: 'vaness4', avatar: AVATARS.vaness4, isFriend: true },
  xtrmblt: { id: 'xtrmblt', username: 'xtrmblt', avatar: AVATARS.xtrmblt, isFriend: true },
  bound2relax: { id: 'bound2relax', username: 'bound2relax', avatar: AVATARS.bound2relax, isFriend: true },
  donastro: { id: 'donastro', username: 'donastro', avatar: AVATARS.donastro, isFriend: true },
  mathilde00: { id: 'mathilde00', username: 'mathilde00', avatar: AVATARS.mathilde00, isFriend: true },
  elizabooth: { id: 'elizabooth', username: 'elizabooth', avatar: AVATARS.elizabooth, isFriend: true },
  julesprm8: { id: 'julesprm8', username: 'julesprm8', avatar: AVATARS.julesprm8, isFriend: true },
};

export const FRIENDS_LIST = Object.values(USERS).filter((u) => u.id !== 'me');

const today = new Date();
const timeString = (h: number, m: number, s: number) => {
  const d = new Date(today);
  d.setHours(h, m, s);
  return d.toISOString();
};

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'c1',
    userId: 'kronomsc',
    username: 'kronomsc',
    avatar: AVATARS.kronomsc,
    text: 'Wow, it\'s really calm in here!',
    createdAt: timeString(14, 42, 10),
  },
  {
    id: 'c2',
    userId: 'edrt',
    username: 'e.drt',
    avatar: AVATARS.edrt,
    text: 'Nice one!',
    createdAt: timeString(14, 43, 5),
  },
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'simon',
    username: 'simon',
    avatar: AVATARS.simon,
    frontImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face',
    backImage: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c8d8d3?w=800&h=1200&fit=crop',
    caption: 'Add a caption...',
    taggedFriends: ['edrt', 'djemdooms'],
    retakes: 1,
    createdAt: timeString(14, 41, 56),
    comments: [],
    reactions: [],
    privacy: 'friends',
  },
  {
    id: 'p2',
    userId: 'kronomsc',
    username: 'kronomsc',
    avatar: AVATARS.kronomsc,
    frontImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=800&fit=crop&crop=face',
    backImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=1200&fit=crop',
    caption: 'Add a caption...',
    taggedFriends: [],
    retakes: 0,
    createdAt: timeString(14, 41, 30),
    comments: [],
    reactions: [],
    privacy: 'friends',
  },
  {
    id: 'p3',
    userId: 'djemdooms',
    username: 'djemdooms',
    avatar: AVATARS.djemdooms,
    frontImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&h=800&fit=crop&crop=face',
    backImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=1200&fit=crop',
    caption: 'Add a caption...',
    taggedFriends: ['edrt'],
    retakes: 2,
    createdAt: timeString(14, 40, 15),
    comments: [],
    reactions: [],
    privacy: 'friends',
  },
];

export const CURRENT_POST = POSTS[0];
