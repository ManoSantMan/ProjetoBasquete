import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { useIsFocused } from '@react-navigation/native';
import { auth } from '../firebase';
import api from '../api';

export default function HomeScreen({ navigation }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      api.get('/partidas')
        .then(res => {
          if (res.data.status === 'success') {
            setMatches(res.data.data);
          } else {
            alert('Nenhuma partida encontrada');
            setMatches([]);
          }
        })
        .catch(error => {
          console.log('Erro ao buscar partidas:', error.message);
          alert('Erro ao buscar partidas');
        })
        .finally(() => setLoading(false));
    }
  }, [isFocused]);

  function handleLogout() {
    signOut(auth).then(() => navigation.replace('Login'));
  }

  function handleDelete(id) {
    Alert.alert(
      'CUIDADO!',
      'Tem certeza que deseja excluir esta partida?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            api.delete(`/partidas/${id}`)
              .then(() => {
                Alert.alert('Sucesso', 'Partida excluída');
                // Recarregar lista após exclusão
                setLoading(true);
                api.get('/partidas')
                  .then(res => {
                    if (res.data.status === 'success') {
                      setMatches(res.data.data);
                    } else {
                      setMatches([]);
                    }
                  })
                  .catch(() => Alert.alert('Erro ao atualizar lista'))
                  .finally(() => setLoading(false));
              })
              .catch(() => Alert.alert('Erro ao excluir partida'));
          }
        }
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewMatch')}>
        <Text style={styles.buttonText}>+ Nova Partida</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#f68b1e" />
      ) : (
        <FlatList
          data={matches}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.time_casa} x {item.time_visitante}</Text>
              <Text style={styles.subtitle}>{item.data_partida}</Text>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditMatch', { partida: item })}>
                  <Text style={styles.btnText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
                  <Text style={styles.btnText}>Excluir</Text>
                </TouchableOpacity>
              </View>
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
  editBtn: { backgroundColor: '#f68b1e', padding: 8, borderRadius: 5, marginRight: 10 },
  deleteBtn: { backgroundColor: '#cc0000', padding: 8, borderRadius: 5 },
  btnText: { color: '#fff', fontWeight: 'bold' },

});