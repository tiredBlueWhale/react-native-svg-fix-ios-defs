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
  TextStyle,
  useColorScheme,
  View,
} from 'react-native';

import Svg, {
  Rect,
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
  RadialGradient,
  Ellipse,
  Circle,
  G,
} from 'react-native-svg';

const App = () => {
  return (
    <SafeAreaView>
      <Svg width={150} height={50}>
        <Defs>
          <LinearGradient
            id="grad1"
            x1={'0%'}
            y1={'0%'}
            x2={'100%'}
            y2={'100%'}>
            <Stop offset={0} stopColor="red" />
            <Stop offset={1} stopColor="blue" />
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={150} height={50} fill={'pink'} />
        {/* Renders gradient correctly*/}
        <Circle cx={25} cy={25} r={25} fill={'url(#grad1)'} stroke="black" />

        <G x={50} y={0}>
          <Svg width={50} height={50}>
            {/* Renders red BG correctly*/}
            <Circle cx={25} cy={25} r={25} fill={'red'} stroke="black" />
          </Svg>
        </G>

        <G x={100} y={0}>
          <Svg width={50} height={50}>
            <Defs>
              <LinearGradient
                id="grad2"
                x1={'0%'}
                y1={'0%'}
                x2={'100%'}
                y2={'100%'}>
                <Stop offset={0} stopColor="red" />
                <Stop offset={1} stopColor="blue" />
              </LinearGradient>
            </Defs>
            {/* Does not render gradient, fill is transparent on iOS*/}
            <Circle
              cx={25}
              cy={25}
              r={25}
              fill={'url(#grad2)'}
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
        </G>
      </Svg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 26,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default App;
