import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{'Username'}</Text>
      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />

      <Text style={styles.label}>{'Password'}</Text>
      <Input
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter password"
      />

      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Cosmixbold',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    fontFamily: 'Cosmixbold',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 8,
  },
  completedItem: {
    backgroundColor: '#d0f0c0',
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'green',
    // fontFamily: 'Playwhite',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    fontFamily: 'PlaywriteDKLoopet-Light',
  },
  containers: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titles: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    fontFamily: 'Cosmixbold', // Make sure font is loaded
  },
  inputRows: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputs: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Cosmixbold',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    fontFamily: 'Cosmixbold',
    // Add any other label styles you need
  },
});
