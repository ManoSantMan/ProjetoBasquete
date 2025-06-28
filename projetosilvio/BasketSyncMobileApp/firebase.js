import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9xvbZ_m4hJRJ-KaCDKAb2zPo6hHtDbtk",
  authDomain: "basketsync-ee53e.firebaseapp.com",
  projectId: "basketsync-ee53e",
  storageBucket: "basketsync-ee53e.firebasestorage.app",
  messagingSenderId: "343659760513",
  appId: "1:343659760513:web:25da0f28c7963df9a2f680"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);