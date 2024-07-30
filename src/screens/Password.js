import React, {useState} from 'react';
import {Pressable, Text, View, ScrollView} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import PrimaryButton from '../components/PrimaryButton';
import {AuthStore} from '../store/auth';

const Password = ({navigation, email}) => {
  const [password, setPassword] = useState('');

  const onContinue = async () => {
    AuthStore.login({email: email, password: password});
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.largeText}>Sign in</Text>

        <Input text={password} setText={setPassword} placeholder="Password" />

        <PrimaryButton text="Continue" onPress={() => onContinue()} />

        <View style={styles.row}>
          <Text style={styles.normalText}>Forgot password ? </Text>

          <Pressable onPress={() => navigation.navigate('signup')}>
            <Text style={styles.boldText}>Reset</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Password;
