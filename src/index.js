import React, { Component } from 'react';
import './config/ReactotronConfig';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

console.tron.log('hello rendering world');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rommanel - Coleçõeeeeeees</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
