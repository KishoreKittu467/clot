import React, {useEffect} from 'react';
import {Text, ScrollView, Pressable} from 'react-native';

import styles from '../styles';

import {observer} from 'mobx-react';
import {ProductStore} from '../store/product';

export const OrderStatus = observer(() => {
  const {
    state: {statuses, status},
    setStatus,
    getStatuses,
  } = ProductStore;

  useEffect(() => {
    getStatuses();
  }, []);

  return (
    <ScrollView horizontal={true} style={styles.orderStatusList}>
      <Pressable style={styles.orderStatus} onPress={() => setStatus(null)}>
        <Text
          style={
            status === null
              ? styles.orderStatusTextSelected
              : styles.orderStatusText
          }>
          All
        </Text>
      </Pressable>
      {statuses.map((x, i) => (
        <Pressable
          style={styles.orderStatus}
          key={i}
          onPress={() => setStatus(x.id)}>
          <Text
            style={
              status && status === x.id
                ? styles.orderStatusTextSelected
                : styles.orderStatusText
            }>
            {x.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
});
