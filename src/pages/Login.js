import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Title } from 'react-native-paper';
import { primaryBlueTheme } from '../utils/themes';
import * as actions from '../store/actions/index';

const Login = () => {
  const { isLoading } = useSelector(state => state.auth);

  const [email, setEmail] = useState('adm@globalsys.com.br');
  const [password, setPassword] = useState('Trocar@123');

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(actions.login(email, password));
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={70} color="#1976d2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        theme={primaryBlueTheme}
        style={styles.input}
      />

      <TextInput
        label="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        mode="outlined"
        theme={primaryBlueTheme}
        secureTextEntry
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        theme={primaryBlueTheme}
        loading={isLoading}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Login;
