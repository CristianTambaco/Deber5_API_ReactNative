// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // * AGREGADO

import { getAuth } from "firebase/auth"; // 





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// ------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWQ_zduEiFl9waoe0BkG4jCWeXq57z0I",
  authDomain: "api-proyectos-3925b.firebaseapp.com",
  projectId: "api-proyectos-3925b",
  storageBucket: "api-proyectos-3925b.firebasestorage.app",
  messagingSenderId: "595092107713",
  appId: "1:595092107713:web:650e8279e12f4d698dbf40"
};

// ------------------------------------


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  // * AGREGADO Y EXPORTADO


export const auth = getAuth(app); // Autenticación 