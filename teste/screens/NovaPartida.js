import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function NovaPartida({ navigation }) {
  const [data, setData] = useState('');
  const [timeCasa, setTimeCasa] = useState('');
  const [timeVisitante, setTimeVisitante] = useState('');

  const salvar = async () => {
    await addDoc(collection(db, 'partidas'), {
      data,
      timeCasa,
      timeVisitante,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Data"
        placeholderTextColor="#bdbdbd"
        value={data}
        onChangeText={setData}
      />
      <Text style={styles.label}>Time da Casa</Text>
      <TextInput
        style={styles.input}
        placeholder="Time da Casa"
        placeholderTextColor="#bdbdbd"
        value={timeCasa}
        onChangeText={setTimeCasa}
      />
      <Text style={styles.label}>Time Visitante</Text>
      <TextInput
        style={styles.input}
        placeholder="Time Visitante"
        placeholderTextColor="#bdbdbd"
        value={timeVisitante}
        onChangeText={setTimeVisitante}
      />
      <View style={styles.buttonContainer}>
        <Button title="Salvar" color="#ff9800" onPress={salvar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0', // cor de quadra de madeira
    padding: 24,
  },
  label: {
    color: '#222',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ff9800',
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
    color: '#222',
  },
  buttonContainer: {
    marginTop: 24,
    borderRadius: 8,
    overflow: 'hidden',
  },
});