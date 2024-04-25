import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "desafioht-e4c41",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const api = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
};

export default api;
