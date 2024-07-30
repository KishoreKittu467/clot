import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import {AuthStore} from '../store/auth';

const Profile = ({navigation}) => {

  const onSignOut = async () => {
    AuthStore.logout();
  };

  return (
    <View>
      <View style={styles.profile}>
        <Image
          style={styles.profileIcon}
          source={require('../../assets/icons/profile_icon.png')}
        />
      </View>

      <Text style={styles.profileName}>Sai Kishore</Text>
      <View style={styles.menuOptions}>
        <Pressable
          style={styles.menuOption}
          onPress={() => navigation.navigate('dashboard')}>
          <Text style={styles.menuText}>Address</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../assets/icons/arrowright2.png')}
          />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <Text style={styles.menuText}>Wishlist</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../assets/icons/arrowright2.png')}
          />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <Text style={styles.menuText}>Payment</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../assets/icons/arrowright2.png')}
          />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <Text style={styles.menuText}>Help</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../assets/icons/arrowright2.png')}
          />
        </Pressable>

        <Pressable style={styles.menuOption}>
          <Text style={styles.menuText}>Support</Text>
          <Image
            style={styles.rightArrow}
            source={require('../../assets/icons/arrowright2.png')}
          />
        </Pressable>
        <Pressable onPress={() => onSignOut()}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
