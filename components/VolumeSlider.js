import { View, StyleSheet, Dimensions } from 'react-native';
import React from "react";
import Slider from '@react-native-community/slider';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    marginTop: 15,
  },
  slider:{
    width: screen.width/2-10, 
  },

});

const VolumeSlider = (props) =>{

  function onChange(value){
    if(props.sound){
      props.sound.setVolumeAsync(parseFloat(value.toFixed(1)));
    }  
    props.alert==true ? props.thisState.volumeAlert = value : props.thisState.volumeSession = value;
  }
  
    return (
        <View style={styles.container}>
            <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            value={ props.alert==true ? props.thisState.volumeAlert : props.thisState.volumeSession }
            onValueChange={onChange}
            minimumTrackTintColor="#40cfff"
            thumbTintColor="#94e7ff"
            />
        </View>
    );
};

export default VolumeSlider;

