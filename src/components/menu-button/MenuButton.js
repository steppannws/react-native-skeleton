/* eslint-disable */
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
// import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import { main } from './style';
import { colors } from '../../theme';

/**
 * Description
 * @author ?
 * @class MenuButton
 */
function MenuButton(props) {
  const [isVisible, showModal] = useState(false);
  const [menuList] = useState([
    { title: 'Home', id: 'home', color: colors.GREEN },
    { title: 'Login', id: 'login', color: colors.PINK },
    { title: 'Settings', id: 'settings', color: colors.ORANGE },
  ]);

  const showMenu = () => {
    this.button.transitionTo({ scale: 20, backgroundColor: colors.BLACK }, 150, 'ease-in');
    setTimeout(() => showModal(!isVisible), 200);
    // setTimeout(() => {
    //   showModal(false);
    //   this.button.transitionTo({ scale: 1 });
    // }, 5000);
  };

  const handleSelectMenu = id => {
    showModal(false);
    this.button.transitionTo({
      backgroundColor: menuList.find(item => item.id === id).color,
    });
    props.gotoMenu(id);
    setTimeout(() => this.button.transitionTo({ scale: 1 }), 400);
    setTimeout(() => this.button.transitionTo({ backgroundColor: colors.BLACK }), 800);
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animatable.View animation="slideInUp" delay={100 * index} useNativeDriver>
        <TouchableWithoutFeedback onPress={() => handleSelectMenu(item.id)}>
          <View style={[main.slide, { backgroundColor: item.color }]}>
            <Text style={main.title}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  };

  return (
    <View style={main.container} pointerEvents="box-none">
      <TouchableOpacity onPress={!isVisible ? showMenu : null}>
        <Animatable.View
          ref={ref => {
            this.button = ref;
          }}
          style={main.circle}
        />
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => showModal(!isVisible)}
      >
        {/* <Animatable.View
          ref={ref => {
            this.overlay = ref;
          }}
          animation="fadeIn"
          duration={700}
          useNativeDriver
          style={main.overlay}
        /> */}
        {isVisible && (
          <Animatable.View animation="fadeIn" useNativeDriver style={main.menuContainer}>
            <Carousel
              ref={c => {
                this.carousel = c;
              }}
              data={menuList}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width * 0.5}
            />
          </Animatable.View>
        )}
      </Modal>
    </View>
  );
}

MenuButton.propTypes = {};
MenuButton.defaultProps = {};

export default MenuButton;
