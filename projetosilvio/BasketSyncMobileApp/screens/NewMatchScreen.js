import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import api from '../api';

export default function NewMatchScreen({ navigation }) {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  function handleSave() {
    if (!team1 || !team2 || !date) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    api.post('/partidas', {
      time_casa: team1,
      time_visitante: team2,
      data_partida: date
    })

      .then(() => {
        Alert.alert('Partida cadastrada com sucesso');
        navigation.goBack();
      })
      .catch(() => Alert.alert('Erro ao cadastrar partida'));
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Time 1" placeholderTextColor="#bbb" value={team1} onChangeText={setTeam1} />
      <TextInput style={styles.input} placeholder="Time 2" placeholderTextColor="#bbb" value={team2} onChangeText={setTeam2} />
      <TextInput style={styles.input} placeholder="Data (YYYY-MM-DD)" placeholderTextColor="#bbb" value={date} onChangeText={setDate} />
      <TouchableOpacity style={styles.button} onPress={handleSave}><Text style={styles.buttonText}>Salvar Partida</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', padding: 20 },
  input: { backgroundColor: '#333', color: '#eee', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10, fontWeight: 'bold' },
  button: { backgroundColor: '#f68b1e', borderRadius: 5, paddingVertical: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
});