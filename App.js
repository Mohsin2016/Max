import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './NAVIGATOR/Navigator'


// FONTS LOAD
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading'

// Redux Imports

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider, useSelector } from "react-redux";
// Redux Imports End here


// All Reducers
import AuthReducer from './Redux/Reducers/Auth'


  
const fetchFonts = () => {
  return Font.loadAsync({
    Bold: require("./assets/FONTS/medium.otf"),
    Regular: require("./assets/FONTS/regular.otf"),
    XBold: require("./assets/FONTS/bold.otf"),
    Semibold: require("./assets/FONTS/semibold.otf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);


  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  const rootReducer = combineReducers({
Auth: AuthReducer
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
<Provider store={store}>
    <MainNavigator>
     <StatusBar style="auto" />
    </MainNavigator>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
