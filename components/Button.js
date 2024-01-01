import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from "react";
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
      backgroundColor: "#94e7ff",
      borderWidth: 1,
      borderColor: '#40cfff',      
  },
  shadowBox: {
    shadowColor: "#40cfff",
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
    return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, styles.shadowBox]}
          >
            {props.type=='start' ?
              <Icon name="play" size={140} color="#cdffff" style={{ position: 'absolute', right: ((screen.width/2)-140)/2 }}/> :// ((tamanho da tela/2)-comprimento do icone)/2 
              <Icon name="stop" size={130} color="#cdffff" />
            }
          </TouchableOpacity>
        </View>
    );
};

export default Button;

