import { Text, TextInput, Touchable, View, TouchableOpacity, StatusBar } from 'react-native';
import React, {Component, useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './styles';
import homeScreenStyles from './styles/homeScreenStyles';
import timerScreenStyles from './styles/timerScreenStyles'

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


  stop = () => {
    let alertTimeToSeconds = timeToSeconds(this.state.alertTime); 
    let sessionTimeToSeconds = timeToSeconds(this.state.sessionTime);
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      alertRemainingSeconds: alertTimeToSeconds,
      sessionRemainingSeconds: sessionTimeToSeconds,
      isRunning: false
    });
    // this.stopsound()
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
              <View style={timerScreenStyles.container}>
                <Text style={timerScreenStyles.sessionRemainingSecondsText}>{`${getRemaining(this.state.sessionRemainingSeconds)}`}</Text>

                <View style={timerScreenStyles.stopButton}>
                  <TouchableOpacity
                    onPress={this.stop}
                    style={timerScreenStyles.stopButton}
                  >
                    <Text style={timerScreenStyles.stopButtonText}>Parar</Text>
                    <Text style={styles.alertRemainingSecondsText}>{`${getRemaining(this.state.alertRemainingSeconds)}`}</Text><Icon name="bell" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

            </>
          ) : (
            //TELA INICIAL
            <>
              {/* <HomeScreen  /> */}
              <View style={homeScreenStyles.container}>
                <StatusBar barStyle={"light-content"} />

                {/* Inputs de tempo */}
                <View style={homeScreenStyles.timeInputs}>
                    <TimeInput thisState={this.state} label="Alertar a cada" type="alert"/>
                    <TimeInput thisState={this.state} label="Duração da sessão"/>
                </View>


                {/* Botão de começar */}
                <View style={homeScreenStyles.startButton}>
                    <TouchableOpacity
                    onPress={this.start}
                    style={homeScreenStyles.startButton}
                    >
                      <Text style={homeScreenStyles.startButtonText}>Começar</Text>
                    </TouchableOpacity>
                </View>


              </View>
            </>
          )
        }

      </View>
    );
  }
}

