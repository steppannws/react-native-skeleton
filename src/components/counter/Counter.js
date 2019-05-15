import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

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
