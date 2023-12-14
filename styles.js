import { StyleSheet, Dimensions } from "react-native";


const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d2e7f8",
      alignItems: "center",
    },
    soundPickerContainer:{
      text: '#000',
    },
    picker: {
      fontSize: 10,
    },
    
  });

export default styles;