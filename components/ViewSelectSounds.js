import { View } from 'react-native';
import styles from '../styles';
import React from "react";
import TimeInput from './SoundInput'

const ViewSelectSounds = (props) =>{
    state = props.state
    return (
    <View style={styles.timePickers}>
        <TimeInput thisState={this.state} label="Som do alerta" type="alert"/>
        <TimeInput thisState={this.state} label="Música da sessão" type="session"/>
    </View>
    );
};

export default ViewSelectSounds;

