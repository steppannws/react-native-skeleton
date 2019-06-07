import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import I18n from 'i18n-js';
import LottieView from 'lottie-react-native';
import { main } from './style';
import { translate, changeLocale } from '../../utils/Translator';
import TranslationEnum from '../../enum/TranslationEnum';

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

  handleChangeLocale = () => {
    I18n.currentLocale() === 'en' ? changeLocale('es') : changeLocale('en');

    // forse update to re-render
    this.forceUpdate();
  };

  render() {
    return (
      <View style={main.container}>
        <Text>{I18n.currentLocale()}</Text>
        <Text>{translate(TranslationEnum.GREETINGS_COPY, { name: 'John' })}</Text>
        <Text onPress={this.handleChangeLocale}>
          {translate(TranslationEnum.CHANGE_LANGUAGE_COPY)}
        </Text>
        <View style={main.lottieWrapper}>
          <LottieView
            ref={ref => {
              this.lottieAnimation = ref;
            }}
            source={require('../../static/lottie/gift-box.json')}
            autoPlay
            loop={false}
          />
        </View>
      </View>
    );
  }
}
