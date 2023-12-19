import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import React, {Component} from "react";
import Slider from '@react-native-community/slider';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  volumeSlider:{
  },
  slider:{
    width: screen.width/2-10, 
  },
  valueInputTime:{
    textAlign: 'center'
  }
});


const VolumeSlider = (props) =>{

    return (
        <View style={styles.volumeSlider}>
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

