import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastrar from './screens/Cadastrar.js';
import EditarPartida from './screens/EditarPartida.js';
import ListaPartidas from './screens/ListaPartidas.js';
import Login from './screens/Login.js';
import NovaPartida from './screens/NovaPartida.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222',
            borderBottomWidth: 4,
            borderBottomColor: '#ff9800',
          },
          headerTintColor: '#ff9800',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            letterSpacing: 2,
            color: '#ff9800',
            textShadowColor: '#000',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 2,
          },
          contentStyle: {
            backgroundColor: '#fff3e0',
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ title: 'Cadastrar', headerShown: false }} />
        <Stack.Screen name="Lista" component={ListaPartidas} options={{ title: 'Partidas' }} />
        <Stack.Screen name="NovaPartida" component={NovaPartida} options={{ title: 'Nova Partida' }} />
        <Stack.Screen name="EditarPartida" component={EditarPartida} options={{ title: 'Editar Partida' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}