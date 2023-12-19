import { StyleSheet, Dimensions } from "react-native";


const screen = Dimensions.get("window");

const homeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#dbfffdff",
      alignItems: "center",
      justifyContent: 'center'
    },
    cols:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    leftCol:{
      width: screen.width/2,
      alignItems: 'center',
      alignContent: 'center'
    },
    rightCol:{
      width: screen.width/2,
      alignItems: 'center',
      alignContent: 'center'
    },


    startButton: {
      //TODO ESTILIZAR O BOTÃO DE COMEÇAR
      borderWidth: 10,
      borderColor: "#89AAFF",
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#d8ffd4",
    },
    startButtonText: {
      //TODO TROCAR A FONTE
      fontSize: 40,
    },
    startView:{
      marginTop: 50
    },



    timeInputs: {
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: screen.width,
      paddingHorizontal: 10
    },
    soundPickers: {
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: screen.width
    },
    pickerSoundPicker:{
      //TODO ESTILIZAR PICKER
      width: screen.width/2
    },
    volumeSliders: {
      borderWidth: 1,
      flexDirection: 'row',
      width: screen.width
    },
  });

export default homeScreenStyles;