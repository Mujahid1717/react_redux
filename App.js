import { StyleSheet, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import store  from './src/redux/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <Home />
      </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  fontStyle:{
    fontSize:30,
    fontWeight:'bold'
  }
});
export default App;