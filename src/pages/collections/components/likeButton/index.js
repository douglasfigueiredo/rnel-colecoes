import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const LikeButton = () => (
  <View style={styles.container}>
    <TouchableHighlight
      style={styles.button}
      onPress={() => {}}
    >
      <Icon name="heart-o" size={22} />
    </TouchableHighlight>
    <Text style={styles.text}>0 Gostei</Text>
  </View>
);

export default LikeButton;
