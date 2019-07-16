import React, { PureComponent } from 'react';
import { View, Button } from 'react-native';
import codePush from 'react-native-code-push';
import { main } from './style';

/**
 * Description
 * @author ?
 * @class CodePushTest
 */
export default class CodePushTest extends PureComponent {

  static navigatorStyle = {};
  static propTypes = {};
  static defaultProps = {};
  static displayName = 'CodePushTest';

  codePushSync() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    return (
      <View style={main.container}>
        <Button
          onPress={this.codePushSync}
          title="Sync with Code Push"
        />
      </View>
    );
  }

}
