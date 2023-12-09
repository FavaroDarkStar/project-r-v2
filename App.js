import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import React, {Component, useState} from "react";

import styles from './styles';
import ViewInputTimes from './components/ViewInputTimes';
import ViewSelectSounds from './components/ViewSelectSounds';

export default class App extends Component {
  state = {
    alertTime: '01:30',
    sessionTime: '18:00'
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ViewInputTimes state={this.state}/>
        <ViewSelectSounds state={this.state}/>
      </View>
    );
  }
}

