import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React from "react";

import homeScreenStyles from '../styles/homeScreenStyles';
import TimeInput from './TimeInput';

//retorna o parametro time(mm:ss) em segundos
function timeToSeconds(time) {
    return (parseInt((time).split(':')[0]) * 60) + parseInt((time.split(':')[1]))
  }

const HomeScreen = (props) =>{
    state = props.state

    start = () => {
        let alertTimeToSeconds = timeToSeconds(this.state.alertTime); 
        let sessionTimeToSeconds = timeToSeconds(this.state.sessionTime);
        // this.playsound();
        this.setState(({
          alertRemainingSeconds: alertTimeToSeconds,
          sessionRemainingSeconds: sessionTimeToSeconds,
          isRunning: true
        }));
        this.interval = setInterval(() => {
          this.setState(state => ({
            alertRemainingSeconds: state.alertRemainingSeconds - 1 < 0 ? alertTimeToSeconds: state.alertRemainingSeconds - 1,
            sessionRemainingSeconds: state.sessionRemainingSeconds - 1 
          }));
          // TODO COLOCAR PLAYSINO AQUI
        }, 1000);
    }

    return (
        <></>
    );
};

export default HomeScreen;

