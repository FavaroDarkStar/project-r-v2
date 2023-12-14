import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import React, {Component} from "react";


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


const TimeInput = (props) =>{
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

