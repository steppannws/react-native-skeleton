/**
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { mainNavigation, loginNavigation } from './navigation/navigator';

export default class App extends PureComponent {
  componentWillMount() {
    const isLoggedIn = true;
    isLoggedIn ? mainNavigation() : loginNavigation();
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
