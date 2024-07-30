import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from '../styles';

import {ProductStore} from '../store/product';
import {observer} from 'mobx-react';

export const Header = observer(({navigationRef, hideCart}) => {
  const {
    state: {cart},
  } = ProductStore;

  return (
    <View style={styles.header}>
      <Image
        style={styles.headerIconStyle}
        source={require('../../assets/icons/profile_icon.png')}
      />

      <View style={styles.headerDropdown}>
        {/* todo: make a drop down here */}
        <Text style={styles.headerText}>Men</Text>
      </View>

      {!hideCart && (
        <Pressable
          onPress={() => navigationRef.navigate('Cart')}
          style={styles.cartIconContainer}>
          <Image
            style={styles.cartIcon}
            source={require('../../assets/icons/bag.png')}
          />
          {cart.length > 0 && (
            <Text style={styles.cartCountBadge}>{cart.length}</Text>
          )}
        </Pressable>
      )}
    </View>
  );
});
