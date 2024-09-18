import { initializeApp } from  "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import config from './firebaseConfig.json'

const firebaseConfig = config.firebaseConfig;

const app = initializeApp(firebaseConfig)


