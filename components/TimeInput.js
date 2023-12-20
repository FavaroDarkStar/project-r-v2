import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import React from "react";
import { useFonts } from 'expo-font';


const screen = Dimensions.get("window");




const styles = StyleSheet.create({
  container:{
    
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'NunitoMedium'
  },
  textInputMask:{
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#e2fdffff', 
    width: screen.width/2-20,
    height: 50,
    borderRadius: 10,
    fontFamily: 'NunitoLight',
    marginTop:5,
    //sombras
    shadowColor: "#5fe8f1",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});




const TimeInput = (props) =>{
  let [fontsLoaded] = useFonts({
    'NunitoMedium': require('../assets/fonts/Nunito-Medium.ttf'),
    'NunitoLight': require('../assets/fonts/Nunito-Light.ttf'),
  });
  if (!fontsLoaded) {
    return null
  }
  state = props.thisState

  handleAlertTimeChange = text => {
      this.state.alertTime = text;
  }
  handleSessionTimeChange = text => {
      this.state.sessionTime = text;
  }
  return (
      <View style={styles.container}>
          <Text style={styles.label}>{props.label} (mm:ss)</Text>
          <TextInputMask 
              style={styles.textInputMask}
              type={'datetime'}
              options={{
              format: 'HH:mm',
              }}
              value={props.type === 'alert' ? this.state.alertTime : this.state.sessionTime}
              onChangeText={props.type === 'alert' ? this.handleAlertTimeChange : this.handleSessionTimeChange}
          />
      </View>
  );
};

export default TimeInput;

