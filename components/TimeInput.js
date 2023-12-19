import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import React, {Component} from "react";
import { useFonts } from 'expo-font';

const screen = Dimensions.get("window");

import OswaldBold from '../assets/fonts/Oswald-Bold.ttf';




const styles = StyleSheet.create({
  timeInput:{
    
  },
  labelInputTime: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Oswald-Bold'
  },
  valueInputTime:{
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: "#d8eff3da", 
    width: screen.width/2-20,
  }
});


const TimeInput = (props) =>{
  const [loaded] = useFonts({
    'Oswald-Bold': require('../assets/fonts/Oswald-Bold.ttf'),
  });
  if (!loaded) {
    return null; // ou algum indicador de carregamento
  }



    state = props.thisState

    handleAlertTimeChange = text => {
        this.state.alertTime = text;
    }
    handleSessionTimeChange = text => {
        this.state.sessionTime = text;
    }
    return (
        <View style={styles.timeInput}>
            <Text style={styles.labelInputTime}>{props.label}</Text>
            <TextInputMask 
                style={styles.valueInputTime}
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

