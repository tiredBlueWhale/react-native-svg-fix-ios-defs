/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Svg, {
  Rect,
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

const App = () => {
  return (
    <SafeAreaView>
      <Text>SVG Test</Text>
      <Svg>
        <Defs>
          <LinearGradient id="gradOuter" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
            <Stop offset="1" stopColor="red" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="purple"
          stroke="purple"
          fontSize="20"
          fontWeight="bold"
          x="0"
          y="20">
          SVG Outer
        </SvgText>
        <Rect x="0" y="30" width="50" height="100" fill="blue" />
        <Rect x="60" y="30" width="50" height="100" fill="url(#gradOuter)" />
        <Svg>
          <Defs>
            <LinearGradient id="gradInner" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <SvgText
            fill="purple"
            stroke="purple"
            fontSize="20"
            fontWeight="bold"
            x="150"
            y="20">
            SVG Inner
          </SvgText>
          <Rect
            x="150"
            y="30"
            width="50"
            height="100"
            fill="blue"
            stroke="black"
            strokeWidth="4"
          />
          <Rect
            x="210"
            y="30"
            width="50"
            height="100"
            fill="url(#gradInner)"
            stroke="black"
            strokeWidth="4"
          />
          <Rect
            x="270"
            y="30"
            width="50"
            height="100"
            fill="url(#gradOuter)"
            stroke="black"
            strokeWidth="4"
          />
        </Svg>
      </Svg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
