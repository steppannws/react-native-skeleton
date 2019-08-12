import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { main } from './style';

/**
 * Description
 * @author ?
 * @class ItemDetails
 */
export default class ItemDetails extends PureComponent {
  /**
   * Navigator styles
   */

  /**
   * Definition of the prop types
   */
  static propTypes = {
    navigation: PropTypes.any.isRequired,
    description: PropTypes.string,
    image: PropTypes.any,
  };

  /**
   * Default Props
   */
  static defaultProps = {
    description: '',
    image: null,
  };

  /**
   * Name of the page for the tracking
   */
  static displayName = 'ItemDetails';

  // constructor(props){
  //   super(props)
  // }

  render() {
    // const { image, description } = this.props;
    const image = this.props.navigation.getParam('image', null);
    const description = this.props.navigation.getParam('description', '');

    return (
      <View style={main.container}>
        <View style={main.imageWrapper}>
          <Image source={image} style={main.image} />
        </View>
        <Text style={main.description}>{description}</Text>
      </View>
    );
  }
}
