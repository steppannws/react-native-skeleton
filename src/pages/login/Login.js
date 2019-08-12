import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { main } from './style';
import Pages from '../../enum/Pages';

/**
 * Description
 * @author ?
 * @class Login
 */
export default class Login extends PureComponent {
  /**
   * Navigator styles
   */
  static navigationOptions = {
    header: null,
  };

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
  static displayName = 'Login';

  render() {
    return (
      <View style={main.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={main.titleWrapper}>
            <Text style={main.titleText}>Login</Text>
          </View>
          <View style={main.formWrapper}>
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              // validationSchema={signInValidation}
              onSubmit={
                /* props */ () => {
                  // Submit form logic here
                  // if (props.username === 'monk' && props.password === 'monk') {
                  //   mainNavigation();
                  //   return;
                  // }
                  // const resetAction = StackActions.reset({
                  //   index: 0,
                  //   actions: [NavigationActions.navigate({ routeName: 'Home' })],
                  // });
                  // this.props.navigation.dispatch(resetAction);
                  this.props.navigation.navigate(Pages.HOME);
                  // Alert.alert('Error', 'Enter correct username and password');
                }
              }
              render={({ values, handleChange, handleSubmit }) => {
                return (
                  <View style={main.fildsWrapper}>
                    <TextInput
                      name="username"
                      style={main.textInput}
                      onChangeText={handleChange('username')}
                      value={values.username}
                      autoCapitalize="none"
                      placeholder="Username"
                    />
                    <TextInput
                      secureTextEntry
                      name="password"
                      style={main.textInput}
                      onChangeText={handleChange('password')}
                      value={values.password}
                      autoCapitalize="none"
                      placeholder="Password"
                    />
                    <Button title="Submit" onPress={handleSubmit} />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
