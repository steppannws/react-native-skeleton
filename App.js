/**
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StartNavigation, LoginNavigation } from './src/navigation/navigator';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) return <StartNavigation />;
    return <LoginNavigation />;
  }
}
