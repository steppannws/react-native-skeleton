import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import routes from '../../navigation/routes';
import { main } from './style';
import { navigationComnponent } from '../../navigation/navigator';

/**
 * Description
 * @author ?
 * @class PagesList
 */
export default class PagesList extends PureComponent {
  /**
   * Navigator styles
   */
  static navigatorStyle = {};

  static options() {
    return {
      topBar: {
        visible: true,
      },
    };
  }

  /**
   * Definition of the prop types
   */
  static propTypes = {
    componentId: PropTypes.string.isRequired,
  };

  /**
   * Default Props
   */
  static defaultProps = {};

  /**
   * Name of the page for the tracking
   */
  static displayName = 'PagesList';

  handlePagesChange = pageId => {
    Navigation.push(
      this.props.componentId,
      navigationComnponent(pageId, {
        options: {
          topBar: {
            title: {
              text: 'test',
            },
          },
        },
      })
    );
  };

  render() {
    return (
      <View style={main.container}>
        <ScrollView>
          {routes
            .filter(page => page.id !== PagesList.pageName)
            .map(page => (
              <Button
                style={main.button}
                key={page.id}
                onPress={() => this.handlePagesChange(page.id)}
                title={page.id}
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}
