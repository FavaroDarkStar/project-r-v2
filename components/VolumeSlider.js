import { View, StyleSheet, Dimensions } from 'react-native';
import React from "react";
import Slider from '@react-native-community/slider';
// import { useFonts } from 'expo-font';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    //sombras
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  slider:{
    width: screen.width/2-10, 

  },

});


const VolumeSlider = (props) =>{
    return (
        <View style={styles.container}>
            {/* <Icon style={styles.label} name="volume-up" size={20} color="black" /> */}
            <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            value={props.value}
            onValueChange={props.onValueChange}
            />
        </View>
    );
};

export default VolumeSlider;

