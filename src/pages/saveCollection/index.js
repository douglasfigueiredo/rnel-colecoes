import React, { Component } from 'react';

import {
  View,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SaveCollection extends Component {
  static navigationOptions = {
    headerTitle: 'COLEÇÕES SALVAS',
    tabBarIcon: ({ tintColor }) => <Icon name="bookmark" size={22} color={tintColor} />,
    headerStyle: {
      backgroundColor: '#654C8F',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 10,
    },
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#654C8F" />
      </View>
    )
  }
};
