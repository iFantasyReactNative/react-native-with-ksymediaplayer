/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import KSYVideo from "react-native-ksyvideo";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React 2!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <KSYVideo source={{uri: "rtmp://live.hkstv.hk.lxdns.com/live/hks"}}   // Can be a URL or a local file.
                  volume={1.0}
                  muted={false}
                  paused={false}                          // Pauses playback entirely.
                  resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                  repeat={true}                           // Repeat forever.
                  playInBackground={false}                // Audio continues to play when app entering background.
                  progressUpdateInterval={250.0}          // Interval to fire onProgress (default to ~250ms)
                  style={styles.backgroundVideo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

