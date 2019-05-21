import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { main } from './style';

/**
 * Description
 * @author ?
 * @class BurgerButton
 */
const BurgerButton = props => {
  return (
    <View style={main.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={main.burgerStack} />
        <View style={main.burgerStack} />
        <View style={main.burgerStack} />
      </TouchableOpacity>
    </View>
  );
};

BurgerButton.propTypes = {
  onPress: PropTypes.func,
};
BurgerButton.defaultProps = {
  onPress: () => {},
};

export default BurgerButton;
