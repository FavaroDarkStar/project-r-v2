import React, { useState, setState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../styles';
import {Picker} from '@react-native-picker/picker';
import homeScreenStyles from '../styles/homeScreenStyles';

const SoundPicker = (props) => {
  const [selectedOption, setSelectedOption] = useState( props.type == "alert" ? props.thisState.selectedAlertSongPath : props.thisState.selectedSessionSongPath);
  const [selectedCustomSound, setSelectedCustomSound] = useState();

  const soundOptions = props.soundOptions;

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    props.type == "alert" ? props.thisState.selectedAlertSongPath = value : props.thisState.selectedSessionSongPath = value;
    
    //TODO TRATAR QUANDO O USUARIO QUISER SELECIONAR O ARQUIVO
    // Se a opção selecionada for 'customSound', permita ao usuário escolher um arquivo
    // if (value === 'customSound') {
    //   pickCustomSound();
    // }
  };

  // const pickCustomSound = async () => {
  //   try {
  //     const result = await DocumentPicker.getDocumentAsync({ type: 'audio/*', copyToCacheDirectory: false });
  //     if (result.type === 'success') {
  //       setSelectedCustomSound(result.uri);
  //     }
  //   } catch (err) {
  //     console.error('Erro ao escolher o arquivo', err);
  //   }
  // };

  return (
    <View style={styles.soundPickerContainer}>
      <Text>{props.label}</Text>
      <Picker 
        selectedValue={selectedOption} 
        onValueChange={(itemValue, itemIndex) => handleOptionChange(itemValue)}
        style={homeScreenStyles.pickerSoundPicker}
      >
        {soundOptions.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>

    </View>
  );
};

export default SoundPicker;