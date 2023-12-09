import { StyleSheet, Dimensions } from "react-native";


const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d2e7f8",
      alignItems: "center",
      justifyContent: "center"
    },

    timeInputTime:{
        borderWidth: 1,
        textAlign:'center'
    },
    labelInputTime: {
        textAlign:'center'
    },
    timePickers: {
        borderWidth: 1,
        flexDirection: 'row'
    }
  });

export default styles;