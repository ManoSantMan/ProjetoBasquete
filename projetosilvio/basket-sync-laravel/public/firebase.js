// public/firebase.js

// Verifica se o Firebase foi carregado corretamente
if (typeof firebase === 'undefined') {
    throw new Error('Firebase SDK não foi carregado corretamente.');
}

const firebaseConfig = {
  apiKey: "AIzaSyC9xvbZ_m4hJRJ-KaCDKAb2zPo6hHtDbtk",
  authDomain: "basketsync-ee53e.firebaseapp.com",
  projectId: "basketsync-ee53e",
  storageBucket: "basketsync-ee53e.firebasestorage.app",
  messagingSenderId: "343659760513",
  appId: "1:343659760513:web:25da0f28c7963df9a2f680"
};

// Inicializa Firebase se ainda não tiver sido inicializado
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
