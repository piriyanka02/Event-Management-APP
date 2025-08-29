// firebase.js
// Change the import from 'firebase/app' to '@firebase/app'
import { initializeApp } from '@firebase/app'; 
import { getFirestore } from '@firebase/firestore'; // You already fixed this one

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_la26DU1eoFEz9tmEdgRIXmW-Pqw3HL0", 
    authDomain: "event-management-app-50eb5.firebaseapp.com", 
    projectId: "event-management-app-50eb5", 
    storageBucket: "event-management-app-50eb5.firebasestorage.app", 
    messagingSenderId: "579122662768", 
    appId: "1:579122662768:web:f174007f76b2292ef853b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

