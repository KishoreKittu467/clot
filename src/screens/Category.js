import {View} from 'react-native';
import React from 'react';
import {Categories} from '../components/Categories';
import {ProductGrid} from '../components/ProductGrid';

export const Category = ({navigation}) => {
  return (
    <View>
      <View>
        <Categories navigation={navigation} />
      </View>

      <ProductGrid byCategory={true} navigation={navigation} />
    </View>
  );
};
