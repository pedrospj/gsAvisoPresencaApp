/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { Provider as ReduxProvider } from 'react-redux';

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <App />
        </PaperProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
