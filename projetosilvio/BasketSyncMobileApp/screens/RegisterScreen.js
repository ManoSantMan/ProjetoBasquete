import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigation.replace('Home'))
      .catch(error => Alert.alert('Erro', error.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#bbb" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#bbb" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleRegister}><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.link}>Já tenho conta</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center', padding: 20 },
  form: { backgroundColor: '#222', padding: 20, borderRadius: 10, width: 320, shadowColor: '#f68b1e', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.7, shadowRadius: 10 },
  title: { fontSize: 24, marginBottom: 20, color: '#f68b1e', fontWeight: 'bold', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 },
  input: { backgroundColor: '#333', color: '#eee', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10, fontWeight: 'bold' },
  button: { backgroundColor: '#f68b1e', borderRadius: 5, paddingVertical: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#f68b1e', marginTop: 10, textAlign: 'center', fontWeight: 'bold' },
});