import { useFonts } from "expo-font";
import { StyleSheet, Dimensions } from "react-native";


const screen = Dimensions.get("window");

const homeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center'
    },
    cols:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40
    },
    leftCol:{
      width: screen.width/2,
      alignItems: 'center',
      alignContent: 'center',
    },
    rightCol:{
      width: screen.width/2,
      alignItems: 'center',
      alignContent: 'center'
    },
  });

export default homeScreenStyles;