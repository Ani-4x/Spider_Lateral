
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const HomeScreen = ({ route, navigation }) => {
  const  user  = route.params?.user;

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };
  console.log('Received user data:', user); // Log the user data to debug

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No user data found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Welcome, {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <TouchableOpacity  onPress={handleSignOut}>
          <Text >Logout</Text>
        </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});

export default HomeScreen;
