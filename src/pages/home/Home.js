import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import LottieView from 'lottie-react-native';
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
  static options() {
    return {
      topBar: {},
    };
  }

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

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);

    this.lottieAnimation = null;
  }

  componentDidAppear() {
    if (this.lottieAnimation) this.lottieAnimation.play();
  }

  componentDidDisappear() {
    if (this.lottieAnimation) this.lottieAnimation.reset();
  }

  render() {
    return (
      <View style={main.container}>
        <LottieView
          ref={ref => {
            this.lottieAnimation = ref;
          }}
          style={main.lottieWrapper}
          source={require('../../static/lottie/gift-box.json')}
          autoPlay
          loop={false}
        />
      </View>
    );
  }
}
