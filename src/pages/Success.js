import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import sucesso from '../../assets/sucesso.json';
import { primaryBlueTheme } from '../utils/themes';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

const Success = ({ navigation }) => {
  const dispatch = useDispatch();

  console.log(navigation);

  const handleGoBack = () => {
    dispatch(actions.leituraClearEverything());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={sucesso}
        autoPlay
        loop={false}
        style={styles.lottieContainer}
      />

      <Title style={{ color: '#1976d2' }}>Leitura realizada com sucesso!</Title>

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleGoBack}
          mode="contained"
          theme={primaryBlueTheme}>
          Voltar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieContainer: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    marginTop: 50,
  },
});

export default Success;
