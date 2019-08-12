import React from 'react';
import { View, Button, Platform } from 'react-native';
// import { Navigation } from 'react-native-navigation';
// import Pages from '../../enum/Pages';
import { main } from './style';

const Drawer = () => {
  const hideSideMenu = () => {
    // Navigation.mergeOptions(Pages.HOME, {
    //   sideMenu: {
    //     right: {
    //       visible: false,
    //     },
    //   },
    // });
  };

  const pushAndCloseSideMenu = () => {
    if (Platform.OS === 'ios') {
      hideSideMenu();
    }
    // Navigation.push(Pages.HOME, {
    //   component: {
    //     name: Pages.LOGIN,
    //   },
    // });
  };

  return (
    <View style={main.container}>
      <Button title="Hide Side Menu" onPress={hideSideMenu} />
      <Button title="Push" onPress={pushAndCloseSideMenu} />
    </View>
  );
};

export default Drawer;
