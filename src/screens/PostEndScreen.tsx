import React from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'PostEnd'>;

export const PostEndScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar time="2:41" />

      <View style={styles.content}>
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

        <Text style={styles.title}>BeReal. shared.</Text>
        <Text style={styles.subtitle}>Your friends will see it in their feed.</Text>

        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.homeBtnText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.myBeRealBtn}
          onPress={() => navigation.replace('MyBeReal')}
        >
          <Text style={styles.myBeRealBtnText}>View My BeReal.</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },
  photoCard: {
    width: SCREEN_W * 0.5,
    height: SCREEN_W * 0.5 * 1.25,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    backgroundColor: Colors.surface,
    marginBottom: Spacing.xxl,
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
  title: {
    color: Colors.text,
    fontSize: 26,
    fontWeight: '900',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 16,
    marginBottom: Spacing.xxl,
  },
  homeBtn: {
    width: '100%',
    backgroundColor: Colors.text,
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  homeBtnText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '700',
  },
  myBeRealBtn: {
    width: '100%',
    backgroundColor: Colors.surface,
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: 'center',
  },
  myBeRealBtnText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
