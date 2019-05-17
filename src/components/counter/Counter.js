import React, { useState } from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';

// eslint-disable-next-line
export default ({ initialValue, incrementBy }) => {
  const [index, incrementIncrement] = useState(initialValue);

  return (
    <View>
      <Text onPress={() => incrementIncrement(index + incrementBy)}>
        Tap here to increment index
      </Text>
      <Text>{index}</Text>
    </View>
  );
};
