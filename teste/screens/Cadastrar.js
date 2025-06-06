import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Cadastrar({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastrar = () => {
    // Aqui você pode implementar o cadastro
    // Exemplo: navigation.replace('Lista');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#bdbdbd"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#bdbdbd"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        placeholderTextColor="#bdbdbd"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff9800',
    alignSelf: 'center',
    marginBottom: 32,
    letterSpacing: 2,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
  button: {
    backgroundColor: '#ff9800',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
    elevation: 2,
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  link: {
    color: '#ff9800',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 15,
    letterSpacing: 1,
  },
});