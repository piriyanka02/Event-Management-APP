import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = { 
apiKey: "AIzaSyD_la26DU1eoFEz9tmEdgRIXmW-Pqw3HL0", 
authDomain: "event-management-app-50eb5.firebaseapp.com", 
projectId: "event-management-app-50eb5", 
storageBucket: "event-management-app-50eb5.firebasestorage.app", 
messagingSenderId: "579122662768", 
appId: "1:579122662768:web:f174007f76b2292ef853b5", 
}; 
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 
export { db }; 
