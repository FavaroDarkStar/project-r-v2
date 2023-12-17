import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import React, {Component} from "react";
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
  timeInput:{
  },
  timeInputTime:{
    justifyContent: 'center',
    alignContent: 'center'
  },
  valueInputTime:{
    textAlign: 'center'
  }
});


const VolumeSlider = (props) =>{

    return (
        <View>
            <Slider
            style={{ width: 200, marginTop: 20 }}
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

