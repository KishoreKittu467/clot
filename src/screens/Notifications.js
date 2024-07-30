import {Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles';

const Notifications = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Pressable style={styles.menuOption}>
        <Image
          style={styles.rowIcon}
          source={require('../../assets/icons/notification2.png')}
        />
        <Text style={styles.menuText}>Kishore, you placed and order check your order history for full details</Text>
      </Pressable>
      <Pressable style={styles.menuOption}>
        <Image
          style={styles.rowIcon}
          source={require('../../assets/icons/notification2.png')}
        />
        <Text style={styles.menuText}>Kishore, you placed and order check your order history for full details</Text>
      </Pressable>
      <Pressable style={styles.menuOption}>
        <Image
          style={styles.rowIcon}
          source={require('../../assets/icons/notification2.png')}
        />
        <Text style={styles.menuText}>Kishore, you placed and order check your order history for full details</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Notifications;
