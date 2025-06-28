import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import api from '../api';

export default function HomeScreen({ navigation }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/matches')
      .then(res => setMatches(res.data))
      .catch(() => alert('Erro ao buscar partidas'))
      .finally(() => setLoading(false));
  }, []);

  function handleLogout() {
    signOut(auth).then(() => navigation.replace('Login'));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewMatch')}>
        <Text style={styles.buttonText}>+ Nova Partida</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
      {loading ? <ActivityIndicator size="large" color="#f68b1e" /> : (
        <FlatList
          data={matches}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.team1} x {item.team2}</Text>
              <Text style={styles.subtitle}>{item.date} - {item.location}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', padding: 20 },
  button: { backgroundColor: '#f68b1e', padding: 12, borderRadius: 5, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#111', fontWeight: 'bold' },
  logoutBtn: { backgroundColor: '#d77005', padding: 10, borderRadius: 5, alignItems: 'center', marginBottom: 20 },
  logoutText: { color: '#111', fontWeight: 'bold' },
  item: { backgroundColor: '#222', padding: 15, marginBottom: 10, borderRadius: 8, shadowColor: '#f68b1e', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 5 },
  title: { color: '#eee', fontWeight: 'bold', fontSize: 16 },
  subtitle: { color: '#bbb', marginTop: 5 },
});