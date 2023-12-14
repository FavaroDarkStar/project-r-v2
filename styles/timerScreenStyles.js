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
      //TODO ESTILIZAR O BOTÃO DE COMEÇAR
      borderWidth: 10,
      borderColor: "#89AAFF",
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffb4a7"
    },
    stopButtonText: {
      //TODO TROCAR A FONTE
      fontSize: 40,
    },
    alertRemainingSecondsText:{
      //TODO ESTILIZAR TEXTO QUE EXIBE QUANTO TEMPO FALTA PARA O ALERTA (OPÇÃO: COLOCAR O INDICADOR DE TEMPO RESTANTE EMVOLTA DO BOTAO
      fontSize: 40,
    },
    sessionRemainingSecondsText:{
      //TODO ESTILIZAR TEXTO QUE EXIBE QUANTO TEMPO FALTA PARA ACABAR A SESSÃO (OPÇÃO: COLOCAR O INDICADOR DE TEMPO RESTANTE EMVOLTA DO BOTAO
      fontSize: 40,
    }

    
  });

export default timerScreenStyles;