import React, {useEffect} from 'react';
import {Text, Image, ScrollView, Pressable} from 'react-native';

import styles from '../styles';

import {observer} from 'mobx-react';
import {ProductStore} from '../store/product';

export const Categories = observer(({navigation}) => {
  const {
    state: {categories, category},
    setCategory,
    getCategories,
  } = ProductStore;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ScrollView horizontal={true} style={styles.categoryList}>
      {categories.map((x, i) => (
        <Pressable
          onPress={() => {
            navigation.navigate('Category');
          }}
          key={i}
          style={styles.category}>
          <Image
            style={styles.categoryImage}
            source={require('../../assets/icons/categories/hoodies.png')}
          />
          <Text style={styles.categoryText}>{x.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
});
