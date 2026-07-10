import React from 'react';
import { StatusBar as RNStatusBar, View, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/theme';

interface StatusBarProps {
  time?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ time = '2:41' }) => {
  return (
    <View style={styles.container}>
      <RNStatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.content}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.icons}>
          <View style={styles.signal}>
            <View style={[styles.bar, { height: 10 }]} />
            <View style={[styles.bar, { height: 14 }]} />
            <View style={[styles.bar, { height: 18 }]} />
            <View style={[styles.bar, { height: 22, backgroundColor: Colors.text }]} />
          </View>
          <View style={styles.wifi}>
            <View style={styles.wifiArc} />
            <View style={[styles.wifiArc, { width: 12, height: 6, marginTop: -2 }]} />
            <View style={[styles.wifiArc, { width: 6, height: 3, marginTop: -1 }]} />
          </View>
          <View style={styles.battery}>
            <View style={styles.batteryBody}>
              <View style={styles.batteryFill} />
            </View>
            <View style={styles.batteryCap} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: 8,
  },
  content: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  time: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
    height: 22,
  },
  bar: {
    width: 3,
    borderRadius: 1,
    backgroundColor: Colors.text,
  },
  wifi: {
    width: 20,
    height: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 2,
  },
  wifiArc: {
    width: 18,
    height: 9,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.text,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  battery: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
  },
  batteryBody: {
    width: 25,
    height: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    borderRadius: 3,
    padding: 1.5,
  },
  batteryFill: {
    flex: 1,
    backgroundColor: Colors.text,
    borderRadius: 1,
  },
  batteryCap: {
    width: 2,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    marginLeft: 1,
  },
});
