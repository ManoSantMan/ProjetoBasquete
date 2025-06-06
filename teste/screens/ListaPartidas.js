import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function ListaPartidas({ navigation }) {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'partidas'), snapshot => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPartidas(lista);
    });

    return unsub;
  }, []);

  const excluirPartida = async (id) => {
    await deleteDoc(doc(db, 'partidas', id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.data}>Data: <Text style={styles.info}>{item.data}</Text></Text>
      <Text style={styles.timeCasa}>Casa: <Text style={styles.info}>{item.timeCasa}</Text></Text>
      <Text style={styles.timeVisitante}>Visitante: <Text style={styles.info}>{item.timeVisitante}</Text></Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => navigation.navigate('EditarPartida', { partida: item })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => excluirPartida(item.id)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.novaPartidaButton}
        onPress={() => navigation.navigate('NovaPartida')}
      >
        <Text style={styles.novaPartidaText}>Nova Partida</Text>
      </TouchableOpacity>
      <FlatList
        data={partidas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
    padding: 20,
  },
  novaPartidaButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  novaPartidaText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 6,
    borderLeftColor: '#ff9800',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  data: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  timeCasa: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  timeVisitante: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  info: {
    color: '#ff9800',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  editButton: {
    backgroundColor: '#222',
  },
  deleteButton: {
    backgroundColor: '#e53935',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});