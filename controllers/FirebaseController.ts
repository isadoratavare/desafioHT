import { collection, addDoc, Firestore } from "firebase/firestore";

import { initializeApp, FirebaseApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
} from "@firebase/auth";

class FirestoreController {
  db: Firestore;
  app: FirebaseApp;
  firebaseConfig: any;
  auth: any;

  constructor() {
    this.firebaseConfig = {
      apiKey: `${process.env.API_KEY}`,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: `${process.env.PROJECT_ID}`,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(this.firebaseConfig);

    this.db = getFirestore(this.app);

    this.auth = getAuth(this.app);
  }

  async addData(data: any) {
    try {
      const docRef = await addDoc(collection(this.db, "data"), data);
      console.log("Documento adicionado com ID: ", docRef.id);
      return { success: true };
    } catch (error: any) {
      console.error("Erro ao adicionar dados: ", error);
      return { success: false, error: error.message };
    }
  }
}

export default FirestoreController;
