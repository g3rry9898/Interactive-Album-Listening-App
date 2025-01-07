import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbTZ1yuy4tq_E9yzdyMTpjtdWi8O89Oc",
  authDomain: "music-platform-c358c.firebaseapp.com",
  projectId: "music-platform-c358c",
  storageBucket: "music-platform-c358c.firebasestorage.app",
  messagingSenderId: "264640527375",
  appId: "1:264640527375:web:e9f58809dfdb3aaaeb77a"
};

// Initialize Firebase only if an app doesn't already exist
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
