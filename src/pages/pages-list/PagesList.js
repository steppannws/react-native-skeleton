import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Button } from 'react-native';
import { StackActions } from 'react-navigation';
import routes from '../../navigation/routes';
import { main } from './style';

/**
 * Description
 * @author ?
 * @class PagesList
 */
export default class PagesList extends PureComponent {
  /**
   * Navigator styles
   */

  /**
   * Definition of the prop types
   */
  static propTypes = {
    navigation: PropTypes.any.isRequired,
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
    const pushAction = StackActions.push({
      routeName: pageId,
    });

    this.props.navigation.dispatch(pushAction);
  };

  render() {
    return (
      <View style={main.container}>
        <ScrollView>
          {Object.values(routes)
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
