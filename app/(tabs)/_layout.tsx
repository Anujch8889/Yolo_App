import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient, Stop, Defs } from 'react-native-svg';

const { width } = Dimensions.get('window');

const tabNav = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          height: 110, // Increased to wrap the icon
          position: 'absolute',
        },
        tabBarBackground: () => (
  <View style={{ flex: 1 }}>
    <Svg
      width={width}
      height={40}
      viewBox={`0 0 ${width} 60`}
      style={{ position: 'absolute', top: -60 }}
    >
      {/* Gradient definition */}
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2={width} y2="0">
          <Stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <Stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <Stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </LinearGradient>
      </Defs>

      {/* Curve shape */}
      <Path
        d={`M0 60 Q${width / 2} 0 ${width} 60`}
        fill="black"
      />

      {/* Light top border with fading edges */}
      <Path
        d={`M0 60 Q${width / 2} 0 ${width} 60`}
        stroke="url(#grad)"
        strokeWidth={1}
        fill="none"
      />
    </Svg>
  </View>
),
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../icons/home.png')}
              style={{ width: 50, height: 50, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="yolopay"
        options={{
          title: 'yolo pay',
          tabBarIcon: () => (
            <View style={styles.middleIconWrapper}>
              <View style={styles.middleIcon}>
                <MaterialCommunityIcons name="qrcode-scan" size={32} color="white" />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ginie"
        options={{
          title: 'ginie',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../icons/ginieicon.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  middleIconWrapper: {
    position: 'absolute',
    top: -30, // slightly adjusted to stay inside the curve
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default tabNav;
