import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.forButton}
        onPress={this.playSound}>
        <Text
          style={styles.forText}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles=StyleSheet.create({
  forButton:{
marginLeft: 100,
          borderWidth: 1,
          borderColor: 'rgb(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
          backgroundColor: 'red',
          borderRadius: 100,
  },
  forText:{
fontWeight: 'bold',
fontSize: 20,
  }
})

export default SoundButton;