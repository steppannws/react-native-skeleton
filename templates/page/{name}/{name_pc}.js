import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { main } from './style';

/**
 * Description
 * @author ?
 * @class {{name_pc}}
 */
export default class {{name_pc}} extends PureComponent {

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
  static displayName = '{{name_pc}}';

  // constructor(props){
  //   super(props)
  // }

  /**
   * is invoked immediately before mounting occurs. It is called before render(), therefore setting
   * state synchronously in this method will not trigger a re-rendering. Avoid introducing any
   * side-effects or subscriptions in this method.
   */
  // componentWillMount(){}

  /**
   * is invoked immediately after a component is mounted. Initialization that requires DOM nodes
   * should go here. If you need to load data from a remote endpoint, this is a good place to
   * instantiate the network request. Setting state in this method will trigger a re-rendering.
   * It is necessary to call super.componentDidMount() so it doesn't miss the tracking.
   */
  // componentDidMount(){
  //   super.componentDidMount();
  // }

  /**
   * is invoked before a mounted component receives new props. If you need to update the state in
   * response to prop changes (for example, to reset it), you may compare this.props and nextProps
   * and perform state transitions using this.setState()
   * in this method.
   */
  // componentWillReceiveProps(nextProps){}

  /**
   * Use shouldComponentUpdate() to let React know if a component's output is not affected by the
   * current change in state or props. The default behavior is to re-render on every state change,
   * and in the vast majority of cases you should rely on the default behavior.
   */
  // shouldComponentUpdate(nextProps, nextState){}

  /**
   * componentWillUpdate() is invoked immediately before rendering when new props or state are being
   * received. Use this as an opportunity to perform preparation before an update occurs. This
   * method is not called for the initial render.
   */
  // componentWillUpdate(){}

  /**
   * componentDidUpdate() is invoked immediately after updating occurs. This method is not called
   * for the initial render. Use this as an opportunity to operate on the DOM when the component has
   * been updated. This is also a good place to do network requests as long as you compare the
   * current props to previous props (e.g. a network request may not be necessary if the props have
   * not changed).
   *
   * componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
   */
  // componentDidUpdate(prevProps, prevState)

  /**
   * onNavigatorEvent will trigger on every navigation event. Use this if it is necessary to add some
   * behavior on any of the navigation event. And please do not use navigator.setOnNavigatorEvent(),
   * this will overwrite the tracking event.
   */
  // onNavigatorEvent(event) {}


  /**
   * When called, it should examine this.props and this.state and return a single React element.
   * This element can be either a representation of a native component, such as <View />, or
   * another composite component that you've defined yourself. You can also return null or false to
   * indicate that you don't want anything rendered.
   *
   * This method will be executed multiple times, each time in needs to render this component.
   */
  render(){
    return (
      <View>
        <Text>{{name_pc}}</Text>
      </View>
    );
  }

}
