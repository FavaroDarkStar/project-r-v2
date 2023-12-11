import { View } from 'react-native';
import styles from '../styles';
import React from "react";
import TimeInput from './TimeInput'

const TimerScreen = (props) =>{
    state = props.state
    return (
    <View style={styles.timePickers}>
        <TimeInput thisState={this.state} label="Tempo do alerta" type="alert"/>
        <TimeInput thisState={this.state} label="Tempo da sessão" type="session"/>
    </View>
    );
};

export default TimerScreen;

