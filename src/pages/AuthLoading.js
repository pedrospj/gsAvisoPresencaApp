import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';

const AuthLoading = () => {
  const { isLoading, token, error } = useSelector(state => state.auth);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color="#1976d2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoading;
