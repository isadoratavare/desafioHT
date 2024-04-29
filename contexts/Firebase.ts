
import { initializeApp, FirebaseApp } from "@firebase/app";
import { getDatabase, Database } from "@firebase/database";
import { getAuth, Auth } from "@firebase/auth";

class Firebase {
  db: Database;
  app: FirebaseApp;
  firebaseConfig: any;
  auth: Auth;

  constructor() {
    this.firebaseConfig = {}
    this.app = initializeApp(this.firebaseConfig);

    this.db = getDatabase(this.app);

    this.auth = getAuth(this.app);
  }

}

export default Firebase;
