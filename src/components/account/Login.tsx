import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import { addUser } from '../../services/Api.js';





const LoginScreen = ({ navigation }) => {




  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '946307240012-o6ui91qj3tik2rdvgeoo0tdq99vipdtt.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      navigation.navigate('HomeScreen', { user: userInfo.data?.user });
      await addUser(userInfo.data?.user)
    } catch (error) {
      console.log('Error signing in:', error);
    }


  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  // not completed 
  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user signed in');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log(`No user found for this email`);
        }
        if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password.');
        }
        console.log('error:', error.message)
      })

  }


  return (



    <View style={styles.container}>





      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={onLogin} >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={{}}>

        <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
      </View>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5866E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },


  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FF4F4E',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }

});




export default LoginScreen;
