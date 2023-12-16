import { StyleSheet, Dimensions } from "react-native";


const screen = Dimensions.get("window");

const homeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d2e7f8",
      alignItems: "center",
    },
    timeInputs: {
      borderWidth: 1,
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      width: screen.width
    },
    soundPickers: {
      borderWidth: 1,
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      width: screen.width
    },
    pickerSoundPicker:{
      //TODO ESTILIZAR PICKER
      width: screen.width/2
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
      backgroundColor: "#d8ffd4"
    },
    startButtonText: {
      //TODO TROCAR A FONTE
      fontSize: 40,
      
    },
  });

export default homeScreenStyles;