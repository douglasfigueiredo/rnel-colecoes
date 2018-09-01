import React from 'react';
import { View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import LikeButton from '../likeButton';

const CardCollection = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Título da Coleção</Text>
      <Icon name="info-circle" size={20} />
    </View>
    <Image
      style={styles.image}
      source={require('../../../../assets/images/colecao-miss.png')}
      width={375}
      height={200}
    />
    <View style={styles.footer}>
      <LikeButton />
    </View>
  </View>
);

export default CardCollection;
