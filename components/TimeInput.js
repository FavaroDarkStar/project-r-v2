import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import React from "react";
import { useFonts } from 'expo-font';


const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    marginTop: 20
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'NunitoBold',
    color: "#40cfff"
  },
  textInputMask:{
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#cfffff', 
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
    'NunitoLight': require('../assets/fonts/Nunito-Light.ttf'),
    'NunitoBold': require('../assets/fonts/Nunito-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null
  }

  return (
      <View style={styles.container}>
          <Text style={styles.label}>{props.label}</Text>
          <Text style={styles.label}>(mm:ss)</Text>
          <TextInputMask 
              style={styles.textInputMask}
              type={'datetime'}
              options={{
              format: 'HH:mm',
              }}
              value={props.value}
              onChangeText={props.onChangeText}
              onBlur={props.onBlur}
          />
      </View>
  );
};

export default TimeInput;

