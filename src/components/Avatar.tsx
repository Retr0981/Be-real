import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import { Radius } from '../constants/theme';

interface AvatarProps {
  uri: string;
  size?: number;
  style?: ViewStyle;
  selected?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ uri, size = 40, style, selected }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: selected ? 2 : 0,
        },
        style,
      ]}
    >
      <Image
        source={{ uri }}
        style={[
          styles.image,
          {
            width: size - (selected ? 4 : 0),
            height: size - (selected ? 4 : 0),
            borderRadius: (size - (selected ? 4 : 0)) / 2,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
});
