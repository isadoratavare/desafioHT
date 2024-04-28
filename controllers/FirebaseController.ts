
import { initializeApp, FirebaseApp } from "@firebase/app";
import { getDatabase, Database } from "@firebase/database";
import { getAuth, Auth } from "@firebase/auth";

class FirestoreController {
  db: Database;
  app: FirebaseApp;
  firebaseConfig: any;
  auth: Auth;

  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyBbjYWEgQ0b1mwFVAE7kKXY8InLOpLM5xU",
      authDomain: "desafioht-e4c41.firebaseapp.com",
      databaseURL: "https://desafioht-e4c41-default-rtdb.firebaseio.com",
      projectId: "desafioht-e4c41",
      storageBucket: "desafioht-e4c41.appspot.com",
      messagingSenderId: "3657948230",
      appId: "1:3657948230:web:4b20865f6a007c5e513e47"
    }
    this.app = initializeApp(this.firebaseConfig);

    this.db = getDatabase(this.app);

    this.auth = getAuth(this.app);
  }

  async addData(data: any) {
    try {
      return { success: true };
    } catch (error: any) {
      console.error("Erro ao adicionar dados: ", error);
      return { success: false, error: error.message };
    }
  }
}

export default FirestoreController;
