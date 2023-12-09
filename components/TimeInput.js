import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../styles';
import { TextInputMask } from 'react-native-masked-text';
import React, {Component} from "react";

const TimeInput = (props) =>{
    state = props.thisState

    handleAlertTimeChange = text => {
        this.state.alertTime = text;
        console.log('alertTime: ' + this.state.alertTime);
    }
    handleSessionTimeChange = text => {
        this.state.sessionTime = text;
        console.log('sessionTime: ' + this.state.sessionTime);
    }
    return (
        <View>
            <Text style={styles.labelInputTime}>{props.label}</Text>
            <TextInputMask 
                style={styles.timeInputTime}
                type={'datetime'}
                options={{
                format: 'HH:mm',
                }}
                value={props.type === 'alert' ? this.state.alertTime : this.state.sessionTime}
                onChangeText={props.type === 'alert' ? this.handleAlertTimeChange : this.handleSessionTimeChange}//se props.try
            />
        </View>
    );
};

export default TimeInput;

