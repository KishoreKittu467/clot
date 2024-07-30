import React, {useState} from 'react';
import {Pressable, Text, View, ScrollView} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';
import PrimaryButton from '../components/PrimaryButton';
import {AuthStore} from '../store/auth';

const Signup = ({navigation, mail}) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState(mail ?? '');
  const [password, setPassword] = useState('');

  const onContinue = async () => {
    AuthStore.register({
      email: email,
      password: password,
      firstName: firstName,
      secondName: secondName,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.largeText}>Create Account</Text>

        <Input
          text={firstName}
          setText={setFirstName}
          placeholder="First name"
        />
        <Input
          text={secondName}
          setText={setSecondName}
          placeholder="Second name"
        />
        <Input text={email} setText={setEmail} placeholder="Email Address" />
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

export default Signup;
