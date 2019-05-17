/**
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { mainNavigation, loginNavigation } from './navigation/navigator';

export default class App extends PureComponent {
  componentDidMount() {
    const isLoggedIn = false;

    setTimeout(() => {
      isLoggedIn ? mainNavigation() : loginNavigation();
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LOADING</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
