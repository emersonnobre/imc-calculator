import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = () => {
    const IMC = (weight / Math.pow((height / 100), 2)).toFixed(2);
    alert(IMC);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        IMC Calculator
      </Text>

      <TextInput
        value={weight}
        style={styles.input}
        placeholder='Weight (kg)'
        keyboardType='numeric'
        onChangeText={(weight) => setWeight(weight)} 
      />

      <TextInput
        value={height}
        style={styles.input}
        placeholder='Height (cm)'
        keyboardType='numeric'
        onChangeText={(height) => setHeight(height)} 
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          Calc
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    margin: 25,
    padding: 15,
    fontSize: 23,
  },
  button: {
    backgroundColor: '#0d6efd',
    padding: 5,
    borderRadius: 3.5,
    margin: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 22,
  },
});