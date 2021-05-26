import 'react-native-gesture-handler';
import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import {NotifierWrapper} from 'react-native-notifier';
import AppContainer from './src/navigation/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <NotifierWrapper>
        <AppContainer />
      </NotifierWrapper>
    </Provider>
  );
};

export default App;
