import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  signIn = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User'}),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return(
      <ImageBackground source={require('../../assets/images/Background-Image.png')} style={styles.container}>
        <StatusBar hidden barStyle="light-content" backgroundColor="#654C8F" />
        <View style={styles.logo}>
          <Image
            style={styles.imageLogo}
            source={require('../../assets/images/logo-branco.png')}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="digite seu e-mail"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            visible-password
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="digite sua senha"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
          />
          <TouchableHighlight style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
};
