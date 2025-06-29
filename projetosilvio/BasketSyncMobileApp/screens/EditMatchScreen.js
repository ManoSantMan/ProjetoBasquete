import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import api from '../api';

export default function EditMatchScreen({ route, navigation }) {
  const { partida } = route.params;
  const [team1, setTeam1] = useState(partida.time_casa);
  const [team2, setTeam2] = useState(partida.time_visitante);
  const [date, setDate] = useState(partida.data_partida);

  function handleUpdate() {
    api.put(`/partidas/${partida.id}`, {
      time_casa: team1,
      time_visitante: team2,
      data_partida: date
    })
    .then(() => {
      Alert.alert('Sucesso', 'Partida atualizada com sucesso');
      navigation.goBack();
    })
    .catch(() => Alert.alert('Erro ao atualizar partida'));
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Time 1" value={team1} onChangeText={setTeam1} />
      <TextInput style={styles.input} placeholder="Time 2" value={team2} onChangeText={setTeam2} />
      <TextInput style={styles.input} placeholder="Data (YYYY-MM-DD)" value={date} onChangeText={setDate} />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Atualizar Partida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', padding: 20 },
  input: { backgroundColor: '#333', color: '#eee', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10, fontWeight: 'bold' },
  button: { backgroundColor: '#f68b1e', borderRadius: 5, paddingVertical: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
});
