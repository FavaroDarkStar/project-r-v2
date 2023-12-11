import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../styles';
import {Picker} from '@react-native-picker/picker';

const SoundPicker = (props) => {
  const [selectedOption, setSelectedOption] = useState();
  const [selectedCustomSound, setSelectedCustomSound] = useState();

  const soundOptions = [
    { label: 'Sound 1', value: 'sound1' },
    { label: 'Sound 2', value: 'sound2' },
    { label: 'Sound 3', value: 'sound3' },
    { label: 'Custom Sound', value: 'customSound' },
  ];

  const handleOptionChange = async (value) => {
    setSelectedOption(value);

    // Se a opção selecionada for 'customSound', permita ao usuário escolher um arquivo
    if (value === 'customSound') {
      pickCustomSound();
    }
    console.log(selectedOption)
  };

  const pickCustomSound = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: 'audio/*', copyToCacheDirectory: false });
      if (result.type === 'success') {
        setSelectedCustomSound(result.uri);
      }
    } catch (err) {
      console.error('Erro ao escolher o arquivo', err);
    }
  };

  return (
    <View style={styles.soundPickerContainer}>
      <Text>{props.label}</Text>
      <Picker 
        selectedValue={selectedOption} 
        onValueChange={(itemValue, itemIndex) => handleOptionChange(itemValue)}
        style={styles.picker}
      >
        {soundOptions.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>

    </View>
  );
};

export default SoundPicker;
