import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { main } from './style';

/**
 * Description
 * @author ?
 * @class Home
 */
export default class Home extends PureComponent {
  /**
   * Navigator styles
   */
  static navigatorStyle = {};

  /**
   * Definition of the prop types
   */
  static propTypes = {};

  /**
   * Default Props
   */
  static defaultProps = {};

  /**
   * Name of the page for the tracking
   */
  static displayName = 'Home';

  render() {
    return (
      <View style={main.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
