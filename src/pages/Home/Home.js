import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import DefaultHome from './DefaultHome';
import CameraPage from './CameraPage';
import * as actions from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { snackbarTheme } from '../../utils/themes';
import Success from '../Success';

const Home = ({ navigation }) => {
  const { error, success } = useSelector(state => state.leitura);
  useEffect(() => {
    if (success) {
      navigation.navigate('Success');
    }
  }, [success, navigation]);

  const [cameraOpen, setCameraOpen] = useState(false);

  const handleOpenCamera = () => setCameraOpen(true);
  const handleCloseCamera = () => setCameraOpen(false);

  const dispatch = useDispatch();

  const handleClearError = () => {
    dispatch(actions.clearError());
  };

  const handleQRCodeScanned = e => {
    handleCloseCamera();
    console.log(e.data);
    dispatch(actions.realizarLeitura(e.data));
  };

  return (
    <View style={{ flex: 1 }}>
      {cameraOpen ? (
        <CameraPage
          handleCloseCamera={handleCloseCamera}
          handleQRCodeScanned={handleQRCodeScanned}
        />
      ) : (
        <DefaultHome handleOpenCamera={handleOpenCamera} />
      )}

      <Snackbar
        visible={error}
        onDismiss={handleClearError}
        action={{ label: 'Fechar', onPress: handleClearError }}
        theme={snackbarTheme}>
        {error}
      </Snackbar>
    </View>
  );
};

export default Home;
