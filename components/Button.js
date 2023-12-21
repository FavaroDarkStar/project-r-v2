import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import React from "react";
import { useFonts } from 'expo-font';
import Icon from "react-native-vector-icons/FontAwesome";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    
  },
  button:{
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      alignContent: 'center',
      justifyContent: "center",
      backgroundColor: "#b8f1f5ff",
      borderWidth: 5,
      borderColor: '#b8f1f5f8',      
  },
  shadowBox: {
    shadowColor: "#5fe8f1",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.01,
    shadowRadius: 9.51,
    elevation: 15,
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
            style={[styles.button, styles.shadowBox]}
          >
            {props.type=='start' ?
              <Icon name="play" size={140} color="#5fe7f1a1" style={{ position: 'absolute', right: ((screen.width/2)-140)/2 }}/> :// ((tamanho da tela/2)-comprimento do icone)/2 
              <Icon name="stop" size={130} color="#5fe7f1a1" />
            }
          </TouchableOpacity>
        </View>
    );
};

export default Button;

