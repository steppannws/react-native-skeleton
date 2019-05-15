import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Button } from 'react-native';
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
  static navigatorStyle = {};

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
  static displayName = 'PagesList';

  // handlePagesChange = pageId => {
  //   this.props.navigator.push({ screen: pageId });
  // };

  render() {
    return (
      <View>
        <ScrollView>
          {routes
            .filter(page => page.id !== PagesList.pageName)
            .map(page => (
              <Button
                style={main.button}
                key={page.id}
                // onPress={() => this.handlePagesChange(page.id)}
                title={page.id}
              />
            ))}
        </ScrollView>
      </View>
    );
  }
}
