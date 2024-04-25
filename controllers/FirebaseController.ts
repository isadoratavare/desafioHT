import { collection, addDoc, Firestore } from "firebase/firestore";

import { initializeApp, FirebaseApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, Auth } from "@firebase/auth";

class FirestoreController {
  db: Firestore;
  app: FirebaseApp;
  firebaseConfig: any;
  auth: Auth;

  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyBbjYWEgQ0b1mwFVAE7kKXY8InLOpLM5xU",
      authDomain: "desafioht-e4c41.firebaseapp.com",
      projectId: `desafioht-e4c41}`,
      storageBucket: "desafioht-e4c41.appspot.com",
      messagingSenderId: "3657948230",
      appId: "1:3657948230:web:4b20865f6a007c5e513e47",
    };
    console.log(this.firebaseConfig);
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
