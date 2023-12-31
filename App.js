import { View, StatusBar } from 'react-native';
import React, {Component} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from 'expo-av';
import styles from './styles/styles';
import homeScreenStyles from './styles/homeScreenStyles';

import TimeInput from './components/TimeInput';
import SoundPicker from './components/SoundPicker';
import VolumeSlider from './components/VolumeSlider';
import TimerScreen from './components/TimerScreen';
import Button from './components/Button';

import { useFonts } from 'expo-font';





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
    sessionRemainingSeconds: 1080,
    volumeAlert: 1,
    volumeSession: 1
  }
  interval = null

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
    } 
  }

  //Função para tocar o replay do som do alerta
  replaySoundAlert(){ 
    this.soundAlert.setVolumeAsync(parseFloat(this.state.volumeAlert.toFixed(1)))
    this.soundAlert.replayAsync();
  }

  //Função para parar o som do alerta
  stopSoundAlert(){  
    this.soundAlert.stopAsync();
  }

  //Função para tocar o som da sessão
  playSoundSession(){
    this.soundSession.setVolumeAsync(parseFloat(this.state.volumeSession.toFixed(1)));
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


  handleAlertTimeChange = text => {
    if(text.length > 3 && text[3]>5){
      let prevText = this.state.alertTime
      this.setState({alertTime: text.slice(0,2)}, ()=> {
        if(prevText== this.state.alertTime){
          this.setState({alertTime: this.state.alertTime+':'})
        }
      }
        );
    }else{
      this.setState({alertTime: text})
    }
  }

  handleSessionTimeChange = text => {
    if(text.length > 3 && text[3]>5){
      let prevText = this.state.sessionTime
      this.setState({sessionTime: text.slice(0,2)}, ()=> {
        if(prevText== this.state.sessionTime){
          this.setState({sessionTime: this.state.sessionTime+':'})
        }
      }
        );
    }else{
      this.setState({sessionTime: text})
    }
  }

  handleBlurAlert = value =>{
    if(this.state.alertTime.length < 5){
      const newValue = this.state.alertTime.padEnd(5, '0');
      const maskedValue = `${newValue.slice(0, 2)}:${newValue.slice(3)}`;
      this.setState({alertTime: maskedValue})
    }
  }

  handleBlurSession = value =>{
    if(this.state.sessionTime.length < 5){
      const newValue = this.state.sessionTime.padEnd(5, '0');
      const maskedValue = `${newValue.slice(0, 2)}:${newValue.slice(3)}`;
      this.setState({sessionTime: maskedValue})
    }
  }



  render(){
    const alertSoundOptions=[{ label: 'Alerta 1', value: 'alert1' }, { label: 'Alerta 2', value: 'alert2' }, { label: 'Alerta 3', value: 'alert3' }, { label: 'Alerta 4', value: 'alert4' }, { label: 'Alerta 5', value: 'alert5' },];     
    const sessionSoundOptions=[{ label: 'Som 1', value: 'song1' }, { label: 'Som 2', value: 'song2' }, { label: 'Som 3', value: 'song3' },];

    return (
 
        <View style={styles.container} >
          {
            this.state.isRunning ? (
              //TELA DO CRONOMETRO
              <>
                <TimerScreen thisState={this.state} onPress={this.stop} volumeAlert={this.state.volumeAlert} volumeSession={this.state.volumeSession} soundAlert={this.soundAlert} soundSession={this.soundSession}/>
              </>
            ) : (
              //TELA INICIAL
              <>
                <View style={homeScreenStyles.container}>
                  <StatusBar barStyle={"light-content"} /> 

                  {/* Colunas alerta e tempo total*/}
                  <View style={homeScreenStyles.cols}>

                    {/* Coluna da esquerda */}
                    <View style={homeScreenStyles.leftCol}>
                      <Icon name="bell" size={50} color="#40cfff" />
                      <TimeInput thisState={this.state} label="Alertar a cada" onChangeText={this.handleAlertTimeChange} value={this.state.alertTime} onBlur={this.handleBlurAlert}/>
                      <SoundPicker label="Som do alerta" thisState={this.state} soundOptions={alertSoundOptions} type='alert' sound={this.soundAlert} />
                      <VolumeSlider thisState={this.state} alert={true} sound={this.soundAlert}/>
                    </View>

                    {/* Colune da direita */}
                    <View style={homeScreenStyles.rightCol}>
                      <Icon name="music" size={50} color="#40cfff" />
                      <TimeInput thisState={this.state} label="Tempo total" onChangeText={this.handleSessionTimeChange} value={this.state.sessionTime} onBlur={this.handleBlurSession}/>
                      <SoundPicker label="Música" thisState={this.state} soundOptions={sessionSoundOptions} sound={this.soundSession} />
                      <VolumeSlider thisState={this.state} sound={this.soundSession} />
                    </View>
                  </View>

                  {/* Botão de começar */}
                  <Button type={'start'} onPress={this.start} />                
                </View>
              </>
            )
          }

        </View>
    );
  }
}

