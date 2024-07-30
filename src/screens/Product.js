import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as faHeartFilled,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import {ProductStore} from '../store/product';
import {observer} from 'mobx-react';
import styles from '../styles';

const {width: screenWidth} = Dimensions.get('window');

export const Product = observer(() => {
  const {
    state: {product, wishlist},
    addToCart,
    addToWishlist,
  } = ProductStore;

  const [activeSlide, setActiveSlide] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(wishlist.find(x => x.id === product.id));
  }, [wishlist]);

  const renderItem = ({item}) => {
    return (
      <Image
        style={{height: 400}}
        source={{
          uri: item,
        }}
      />
    );
  };

  return (
    <View>
      <ScrollView>
        <Carousel
          data={product.imgs}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth}
          layout={'tinder'}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <Pressable
          onPress={() => addToWishlist(product)}
          style={styles.wishlistIcon}>
          <FontAwesomeIcon
            style={{color: 'red'}}
            icon={liked ? faHeartFilled : faHeart}
          />
        </Pressable>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              marginBottom: 20,
            }}>
            <View>
              <Text
                style={styles.productName}>
                {product.name}
              </Text>
            </View>
            <Text style={styles.productPrice}>
              ${product.price}
            </Text>
          </View>
          <Text style={{fontFamily: 'Poppins-Light', paddingBottom: 100}}>
            {product.description}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.productBtn}
        onPress={() => addToCart(product)}>
        <FontAwesomeIcon
          style={{color: '#fff', marginRight: 10}}
          icon={faCartShopping}
        />
        <Text style={styles.productName}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
});
