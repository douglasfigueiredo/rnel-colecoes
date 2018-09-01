import React, { Component } from 'react';

import {
  View,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CardCollection from './components/cardCollection';

import styles from './styles';

export default class Collections extends Component {

  static navigationOptions = {
    headerTitle: 'COLEÇÕES',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={22} color={tintColor} />,
    headerStyle: {
      backgroundColor: '#654C8F',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 10,
    },
  };

  state = {
    data: [
      'collection': {
        id:1,
        title: 'Coleção 1',
        image: '../../assets/images/logo-branco.png',
      },
      'collection': {
        id:2,
        title: 'Coleção 2',
        image: '../../assets/images/logo-branco.png',
      },
      'collection': {
        id:3,
        title: 'Coleção 3',
        image: '../../assets/images/logo-branco.png',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#654C8F" />
        <CardCollection />
      </View>
    )
  }
};
