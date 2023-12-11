import { Text, TextInput, Touchable, View, TouchableOpacity } from 'react-native';
import React, {Component, useState} from "react";

import styles from './styles';
import ViewInputTimes from './components/ViewInputTimes';
import ViewSelectSounds from './components/ViewSelectSounds';
import HomeScreen from './components/HomeScreen';
import TimeInput from './components/TimeInput';

//retorna o numero formatado com duas casas
function formatNumber(number) {
  return `0${number}`.slice(-2);
}

//retorna o tempo restante
const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${formatNumber(minutes)}:${formatNumber(seconds)}`
}

//retorna o parametro time(mm:ss) em segundos
function timeToSeconds(time) {
  return (parseInt((time).split(':')[0]) * 60) + parseInt((time.split(':')[1]))
}

export default class App extends Component {
  state = {
    isRunning: false,
    alertTime: '01:30',
    sessionTime: '18:00',
    selectedAlertSongPath: '',
    selectedSessionSongPath: '',
    alertRemainingSeconds: 90,
    sessionRemainingSeconds: 1080
  }

  interval = null
  
  

  start = () => {
    alertTimeToSeconds = timeToSeconds(this.state.alertTime); 
    sessionTimeToSeconds = timeToSeconds(this.state.sessionTime);
    console.log(`alertTimeToSeconds: ${alertTimeToSeconds}`)
    console.log(`sessionTimeToSeconds: ${sessionTimeToSeconds}`)
    // this.playsound();
    this.setState(state => ({
      alertRemainingSeconds: alertTimeToSeconds,
      sessionRemainingSeconds: sessionTimeToSeconds,
      isRunning: true
    }));
    this.interval = setInterval(() => {
      this.setState(state => ({
        alertRemainingSeconds: state.alertRemainingSeconds - 1 < 0 ? alertTimeToSeconds: state.alertRemainingSeconds - 1,
        sessionRemainingSeconds: state.sessionRemainingSeconds - 1 
      }));
      console.log('COLOCAR PLAYSINO AQUI')
    }, 1000);
  }

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      alertRemainingSeconds: this.timeToSeconds(this.alertTime),
      sessionRemainingSeconds: this.timeToSeconds(this.sessionTime),
      isRunning: false
    });
    this.stopsound()
  } 
  
  




  componentDidUpdate = (prevState) => {
    if(this.state.sessionRemainingSeconds === 0 && prevState.sessionRemainingSeconds !== 0){
      this.stop();
    }
  }

  componentWillUnmount() {
    if(this.interval){
      clearInterval(this.interval);
    }
  }


  render(){
    return (
      <View style={styles.container}>

        {
          this.state.isRunning ? (
            //TELA DO CRONOMETRO
            <>
              {/* <TimerScreen  /> */}
              <View style={styles.timerScreen}>
                <Text>{`${getRemaining(this.state.alertRemainingSeconds)}`}</Text>
                <Text>{`${getRemaining(this.state.sessionRemainingSeconds)}`}</Text>
              </View>

            </>
          ) : (
            //TELA INICIAL
            <>
              {/* <HomeScreen  /> */}
              <View style={styles.timePickers}>
                <TimeInput thisState={this.state} label="Alertar a cada" type="alert"/>
                <TimeInput thisState={this.state} label="Duração da sessão"/>
              </View>

              <View style={styles.startButton}>
                <TouchableOpacity
                  onPress={this.start}
                >
                  <Text style={styles.buttonText}>Começar</Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }

      </View>
    );
  }
}

