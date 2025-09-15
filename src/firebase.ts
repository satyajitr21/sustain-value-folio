// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC38ZUJsFzeOm4URcyNFoMi6-COHFYZ-oE",
  authDomain: "satyajit-website.firebaseapp.com",
  projectId: "satyajit-website",
  storageBucket: "satyajit-website.firebasestorage.app",
  messagingSenderId: "313630963217",
  appId: "1:313630963217:web:295cdf9948177ade4ba3b0",
  measurementId: "G-QSJ91YRPKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics only works in browser (not during SSR/build)
let analytics: ReturnType<typeof getAnalytics> | null = null;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
    console.log("✅ Firebase Analytics enabled");
  } else {
    console.log("⚠️ Firebase Analytics not supported in this environment");
  }
});

export { app, analytics };