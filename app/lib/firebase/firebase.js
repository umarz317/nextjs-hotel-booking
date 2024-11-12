import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "hotel-booking-6b881.firebaseapp.com",
  projectId: "hotel-booking-6b881",
  storageBucket: "hotel-booking-6b881.firebasestorage.app",
  messagingSenderId: "968709699110",
  appId: "1:968709699110:web:65c889199ab2c7238018e7",
  measurementId: "G-8TJ928N4VV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)