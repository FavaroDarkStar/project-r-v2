import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import React from "react";
import { useFonts } from 'expo-font';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    marginTop: 50,
    
  },
  button:{
      //TODO ESTILIZAR O BOTÃO DE COMEÇAR
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#b8f1f5ff",
      borderWidth: 5,
      borderColor: '#b8f1f5f8',
      //sombras
      shadowColor: "#5fe8f1",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.01,
      shadowRadius: 9.51,
      elevation: 15,
  },
  buttonText:{
    fontSize: 40,
    fontFamily: "NunitoMedium",
    color: "#000000",
  }
});



const Button = (props) =>{
  let [fontsLoaded] = useFonts({
    'NunitoMedium': require('../assets/fonts/Nunito-Medium.ttf'),
    'NunitoLight': require('../assets/fonts/Nunito-Light.ttf'),
    'NunitoBold': require('../assets/fonts/Nunito-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null
  }
    return (
        <View style={styles.container}>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
        </View>
    );
};

export default Button;

