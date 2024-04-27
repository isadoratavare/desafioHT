
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
      
    };
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
