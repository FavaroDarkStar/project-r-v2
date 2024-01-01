import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");

const timerScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d2e7f8",
      alignItems: "center",
      justifyContent: "center"
    },
    stopButton: {
      borderWidth: 10,
      borderColor: "#89AAFF",
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffb4a7"
    },
    alertRemainingSecondsText:{
      fontSize: 40,
    },
    sessionRemainingSecondsText:{
      fontSize: 40,
    },
  });

export default timerScreenStyles;