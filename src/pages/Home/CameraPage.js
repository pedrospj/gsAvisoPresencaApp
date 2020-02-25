import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';
import { redButtonTheme } from '../../utils/themes';

const CameraPage = ({ handleCloseCamera, handleQRCodeScanned }) => {
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={handleQRCodeScanned}
        topContent={<TopContent />}
        bottomContent={<BottomContent handleCancelar={handleCloseCamera} />}
      />
    </View>
  );
};

const TopContent = () => {
  return (
    <View>
      <Title style={styles.textBold}>Aponte a câmera para o QR Code.</Title>
    </View>
  );
};

const BottomContent = ({ handleCancelar }) => {
  return (
    <View style={styles.bottomContentStyle}>
      <Button mode="contained" theme={redButtonTheme} onPress={handleCancelar}>
        Cancelar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  bottomContentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraPage;
