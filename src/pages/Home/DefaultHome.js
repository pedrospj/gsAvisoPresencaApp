import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Title, Subheading, Avatar } from 'react-native-paper';
import { iconTheme } from '../../utils/themes';

const DefaultHome = ({ handleOpenCamera }) => {
  return (
    <View style={styles.container}>
      <Title>Bem-vindo(a) ao gsPresença!</Title>

      <Subheading style={styles.message}>
        Para marcar sua presença abra clique no botão abaixo e leia o QR Code!
      </Subheading>

      <TouchableOpacity onPress={handleOpenCamera} style={styles.qrButton}>
        <Avatar.Icon icon="qrcode-scan" theme={iconTheme} color="#FFF" />
        <Subheading style={styles.buttonLabel}>Ler QR Code</Subheading>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  message: {
    marginVertical: 30,
  },
  qrButton: {
    backgroundColor: '#1976d2',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
  buttonLabel: {
    color: '#FFF',
  },
});

export default DefaultHome;
