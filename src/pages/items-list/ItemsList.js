import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { main } from './style';
import { images } from '../../theme';
import Pages from '../../enum/Pages';

/**
 * Description
 * @author ?
 * @class ItemsList
 */
export default class ItemsList extends PureComponent {
  /**
   * Navigator styles
   */
  static option() {
    return {
      topBar: {
        //   visible: false,
      },
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
  static displayName = 'ItemsList';

  constructor(props) {
    super(props);

    this.data = [
      {
        id: '0',
        image: images.MONKS_1,
        title: 'Image 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: '1',
        image: images.MONKS_2,
        title: 'Image 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: '3',
        image: images.MONKS_3,
        title: 'Image 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];
  }

  handleOpenItem = ({ id, image, title, description }) => {
    Navigation.push(Pages.ITEMS_LIST, {
      component: {
        name: Pages.ITEM_DETAILS,
        passProps: {
          id,
          image,
          title,
          description,
        },
        options: {
          topBar: {
            title: {
              text: title,
            },
          },
        },
      },
    });
  };

  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <TouchableOpacity onPress={() => this.handleOpenItem(item)} style={main.itemWrapper}>
          <View style={main.thumbWrapper}>
            <Image source={item.image} style={main.thumbImage} />
          </View>
          <Text style={main.titleText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={main.container}>
        <FlatList
          data={this.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          style={main.flatList}
        />
      </View>
    );
  }
}
