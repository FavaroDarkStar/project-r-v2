import { StyleSheet, Dimensions } from "react-native";


const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d2e7f8",
      alignItems: "center",
    },
    timePickers: {
      borderWidth: 1,
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      width: screen.width
    },
    timeInput: {
      width: screen.width/2
    },


    timeInputTime:{
        textAlign:'center'
    },
    labelInputTime: {
        textAlign:'center'
    },


    soundPickerContainer:{
      text: '#000',
    },
    picker: {
      fontSize: 10,
    }
    
  });

export default styles;