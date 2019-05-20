import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text, TextInput, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import { main } from './style';
import { signInValidation } from '../../utils/forms/form-validations';
import { mainNavigation } from '../../navigation/navigator';

/**
 * Description
 * @author ?
 * @class Login
 */
export default class Login extends PureComponent {
  /**
   * Navigator styles
   */
  static options() {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
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
              validationSchema={signInValidation}
              onSubmit={props => {
                // Submit form logic here
                if (props.username === 'monk' && props.password === 'monk') {
                  mainNavigation();
                  return;
                }
                Alert.alert('Error', 'Enter correct username and password');
              }}
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
