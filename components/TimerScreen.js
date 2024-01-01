import { View, Text } from 'react-native';
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFonts } from 'expo-font';

import { StyleSheet, Dimensions } from "react-native";
import VolumeSlider from './VolumeSlider';
import Button from './Button';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
    stopButton: {
      //TODO ESTILIZAR O BOTÃO DE COMEÇAR
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#94e7ff",
      borderWidth: 5,
      borderColor: '#40cfff',


    },
    shadowBox:{
        shadowColor: "#40cfff",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.01,
        shadowRadius: 9.51,
        elevation: 15,
    },
    sessionRemainingSecondsText:{
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#cfffff', 
        width: screen.width/3,
        borderRadius: 10,
        fontFamily: 'NunitoLight',
        marginBottom:10,
        marginTop: 5
    },
    alertRemainingSecondsText:{
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#cfffff', 
        width: screen.width/5,
        borderRadius: 10,
        fontFamily: 'NunitoLight',
        marginTop: 5
    },
    volumeSlidersContainer: {
        flexDirection: 'row',
        marginTop:50
    },
    volumeSlider:{
        alignItems: 'center',
    },
    remainingSeconds:{
        fontSize: 20,
        fontFamily: 'NunitoLight',
        alignItems: 'center',
        marginBottom: 50,
    }
});

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

const TimerScreen = (props) =>{
    let [fontsLoaded] = useFonts({
        'NunitoLight': require('../assets/fonts/Nunito-Light.ttf'),
    });
    if(!fontsLoaded) {
        return null
    }
    return (
    <View style={styles.container}>
        <View style={styles.remainingSeconds}>
            <Icon name="music" size={50} color="#40cfff" />
            <Text style={[styles.sessionRemainingSecondsText, styles.shadowBox]}>{`${getRemaining(props.thisState.sessionRemainingSeconds)}`}</Text>
            <Icon name="bell" size={25} color="#40cfff"/>
            <Text style={[styles.alertRemainingSecondsText, styles.shadowBox]}>{`${getRemaining(props.thisState.alertRemainingSeconds)}`}</Text>
        </View>


        <Button type={'stop'} onPress={props.onPress} />
        
        
        <View style={styles.volumeSlidersContainer}>
            <View style={styles.volumeSlider}>
                <Icon name="bell" size={30} color="#40cfff" />     
                <VolumeSlider thisState={props.thisState} alert={true} sound={props.soundAlert} />
            </View>
            <View style={styles.volumeSlider}>
                <Icon name="music" size={30} color="#40cfff" />
                <VolumeSlider thisState={props.thisState}  sound={props.soundSession} />
            </View>
        </View>
    </View>
    );
};

export default TimerScreen;

