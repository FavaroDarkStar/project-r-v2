import { View } from 'react-native';
import styles from '../styles';
import React from "react";
import SoundPicker from './SoundPicker'

const ViewSelectSounds = (props) =>{
    state = props.state
    return (
    <View style={styles.timePickers}>
        <SoundPicker thisState={this.state} label="Som do alerta" type="alert"/>
        <SoundPicker thisState={this.state} label="Música da sessão" type="session"/>
    </View>
    );
};

export default ViewSelectSounds;

