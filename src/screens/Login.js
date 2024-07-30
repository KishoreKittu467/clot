import React, {useState} from 'react';
import {Pressable, Text, View, ScrollView} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import PrimaryButton from '../components/PrimaryButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');

  const onContinue = async () => {
    navigation.navigate('password');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.largeText}>Sign in</Text>

        <Input text={email} setText={setEmail} placeholder="Email Address" />

        <PrimaryButton text="Continue" onPress={() => onContinue()} />

        <View style={styles.row}>
          <Text style={styles.normalText}>Dont have an Account ? </Text>

          <Pressable onPress={() => navigation.navigate('signup')}>
            <Text style={styles.boldText}>Create One</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
