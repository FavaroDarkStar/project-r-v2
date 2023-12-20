import React, { useState, setState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import homeScreenStyles from '../styles/homeScreenStyles';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome'; 

import RNPickerSelect from "react-native-picker-select";

const screen = Dimensions.get("window");


const styles = StyleSheet.create({
  container:{
    paddingTop:40,

  },
  label:{
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'NunitoMedium',
  },
  boxShadow: {

  }
});

const pickerStyles = StyleSheet.create({
  inputAndroid: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: "#d8eff3da", 
    width: screen.width/2-20,
    height: 50,
    borderRadius: 10,
    fontFamily: 'NunitoLight',
    color: '#000000',
    marginTop:5,
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
  iconContainer: {
    top: 15,
    right: 6
  },
  // inputIOS: {
  // },
});


const SoundPicker = (props) => {
  const [selectedOption, setSelectedOption] = useState( props.type == "alert" ? props.thisState.selectedAlertSongPath : props.thisState.selectedSessionSongPath);
  const [selectedCustomSound, setSelectedCustomSound] = useState();
  const soundOptions = props.soundOptions;

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    props.type == "alert" ? props.thisState.selectedAlertSongPath = value : props.thisState.selectedSessionSongPath = value;
  };

  let [fontsLoaded] = useFonts({
    'NunitoMedium': require('../assets/fonts/Nunito-Medium.ttf'),
    'NunitoLight': require('../assets/fonts/Nunito-Light.ttf'),
  });
  if (!fontsLoaded) {
    return null
  }


  return (
    
    <View style={[styles.container, styles.boxShadow]}>
      <Text style={styles.label}>{props.label}</Text>
        <RNPickerSelect
          value={selectedOption}
          style={pickerStyles}
          onValueChange={(itemValue) => handleOptionChange(itemValue)}
          items={soundOptions}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return <Icon name="caret-down" size={20} color="black" />;
          }}
          placeholder={{  }} 
        />
      </View>
  );
};

export default SoundPicker;
