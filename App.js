import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React, {Component, useState, useEffect} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from 'expo-av';
import styles from './styles';
import homeScreenStyles from './styles/homeScreenStyles';

import timerScreenStyles from './styles/timerScreenStyles'

import TimeInput from './components/TimeInput';
import SoundPicker from './components/SoundPicker';
import VolumeSlider from './components/VolumeSlider';

import { useFonts } from 'expo-font';
import Button from './components/Button';


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
    selectedAlertSongPath: 'alert1',
    selectedSessionSongPath: 'song1',
    alertRemainingSeconds: 90,
    sessionRemainingSeconds: 1080
  }

  interval = null

  volumeAlert = 1;
  volumeSession = 1;

  

  //Ao carregar compentente configura e setta os sons
  async setLoadSounds(){ 
    //Setta configurações do Audio
    Audio.setAudioModeAsync({
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });

    //Instancia os sons
    this.soundAlert = new Audio.Sound();
    this.soundSession = new Audio.Sound();
    //Define configurações dos sons
    const statusAlert = {
      shouldPlay: false,
      isLooping: false,
    };
    const statusSession = {
      shouldPlay: false,
      isLooping: true,
    };

    //Carrega os sons
    switch(this.state.selectedAlertSongPath){
      case 'alert1':
        await this.soundAlert.unloadAsync();
        await this.soundAlert.loadAsync(require('./assets/alertSongs/alert1.mp3'), statusAlert, false);
        break;
      case 'alert2':
        await this.soundAlert.unloadAsync();
        await this.soundAlert.loadAsync(require('./assets/alertSongs/alert2.mp3'), statusAlert, false);
        break;
      case 'alert3':
        await this.soundAlert.unloadAsync();
        await this.soundAlert.loadAsync(require('./assets/alertSongs/alert3.mp3'), statusAlert, false);
        break;
      case 'alert4':
        await this.soundAlert.unloadAsync();
        await this.soundAlert.loadAsync(require('./assets/alertSongs/alert4.mp3'), statusAlert, false);
        break;
      case 'alert5':
        await this.soundAlert.unloadAsync();
        await this.soundAlert.loadAsync(require('./assets/alertSongs/alert5.mp3'), statusAlert, false);
        break;
      //TODO QUANDO IMPLEMENTAR A OPÇÃO DO USUÁRIO SELECIONAR O AUDIO TRATAR O CARREGAMENTO DO ARQUIVO AQUI
      // case 'customSound':
      //   await this.soundAlert.loadAsync(require('./assets/alertSongs/customSound.mp3'), statusAlert, false);
      //   break;
    }
    switch(this.state.selectedSessionSongPath){
      case 'song1':
        await this.soundSession.unloadAsync();
        await this.soundSession.loadAsync(require('./assets/sessionSongs/song1.mp3'), statusSession, false);
        break;
      case 'song2':
        await this.soundSession.unloadAsync();
        await this.soundSession.loadAsync(require('./assets/sessionSongs/song2.mp3'), statusSession, false);
        break;
      case 'song3':
        await this.soundSession.unloadAsync();
        await this.soundSession.loadAsync(require('./assets/sessionSongs/song3.mp3'), statusSession, false);
        break;      
      //TODO QUANDO IMPLEMENTAR A OPÇÃO DO USUÁRIO SELECIONAR O AUDIO TRATAR O CARREGAMENTO DO ARQUIVO AQUI
      // case 'customSound':
      //   await this.soundAlert.loadAsync(require('./assets/alertSongs/customSound.mp3'), statusAlert, false);
      //   break;
    } 
  }

  //Função para tocar o replay do som do alerta
  replaySoundAlert(){ 
    this.soundAlert.setVolumeAsync(parseFloat(this.volumeAlert.toFixed(1)))
    this.soundAlert.replayAsync();
  }

  //Função para parar o som do alerta
  stopSoundAlert(){  
    this.soundAlert.stopAsync();
  }

  //Função para tocar o som da sessão
  playSoundSession(){
    this.soundSession.setVolumeAsync(parseFloat(this.volumeSession.toFixed(1)));
    this.soundSession.playAsync();
  }
  //Função para parar o som da sessão
  stopSoundSession(){  
    this.soundSession.stopAsync();
  }
  
  //Função para iniciar a sessão
  start = async() => {    
    let alertTimeToSeconds = timeToSeconds(this.state.alertTime); 
    let sessionTimeToSeconds = timeToSeconds(this.state.sessionTime);
    await this.setLoadSounds();
    this.playSoundSession();
    this.setState(({
      alertRemainingSeconds: alertTimeToSeconds,
      sessionRemainingSeconds: sessionTimeToSeconds,
      isRunning: true
    }));
    this.interval = setInterval(() => {
      if (this.state.alertRemainingSeconds - 1 == 1){
       this.replaySoundAlert()
      }
      this.setState(state => ({
        alertRemainingSeconds: state.alertRemainingSeconds - 1 == 0 ? alertTimeToSeconds: state.alertRemainingSeconds - 1,
        sessionRemainingSeconds: state.sessionRemainingSeconds - 1 
      }));
    }, 1000);
  }
  //Função para parar a sessão
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
    this.stopSoundSession()
    this.stopSoundAlert()
  } 
  //Função settar o volume do alerta
  setVolumeAlert = async (value) => {
    this.volumeAlert = value;
  };
  //Função settar o volume da sessao
  setVolumeSession = async (value) => {
    this.volumeSession = value;
  };
  
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

  
  loadFonts() { 
    let [fontsLoaded] = useFonts({
      'NunitoMedium': require('./assets/fonts/Nunito-Medium.ttf'),
      'NunitoBold': require('./assets/fonts/Nunito-Bold.ttf'),
    });
    if (!fontsLoaded) {
      return null;
    }
  }
  render(){
    const alertSoundOptions=[{ label: 'Alerta 1', value: 'alert1' }, { label: 'Alerta 2', value: 'alert2' }, { label: 'Alerta 3', value: 'alert3' },
                        { label: 'Alerta 4', value: 'alert4' }, { label: 'Alerta 5', value: 'alert5' },];
    const sessionSoundOptions=[{ label: 'Som 1', value: 'song1' }, { label: 'Som 2', value: 'song2' }, { label: 'Som 3', value: 'song3' },];

    return (
 
        <View style={styles.container} >
          
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
                  <View style={homeScreenStyles.cols}>
                    
                    {/* Coluna da esquerda */}
                    <View style={homeScreenStyles.leftCol}>
                      <TimeInput thisState={this.state} label="Alertar a cada" type="alert"/>
                      <SoundPicker label="Som do alerta" thisState={this.state} soundOptions={alertSoundOptions} type='alert' sound={this.soundAlert} />
                      <VolumeSlider label="Volume do alerta" value={this.volumeAlert} onValueChange={this.setVolumeAlert}/>
                    </View>
                    {/* Colune da direita */}
                    <View style={homeScreenStyles.rightCol}>
                      <TimeInput thisState={this.state} label="Tempo total"/>
                      <SoundPicker label="Música" thisState={this.state} soundOptions={sessionSoundOptions} sound={this.soundSession}/>
                      <VolumeSlider label="Volume da música" value={this.volumeSession} onValueChange={this.setVolumeSession}/>
                    </View>
                  </View>


                  {/* Botão de começar */}
                  <Button buttonText={'Começar'} onPress={this.start} />


                
                </View>
              </>
            )
          }

        </View>
    );
  }
}

