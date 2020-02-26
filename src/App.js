import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#1976d2" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
