import { useState } from "react";
import {
  child,
  ref,
  set,
  push,
  get,
  query,
  equalTo,
  orderByChild,
  DataSnapshot,
} from "@firebase/database";
import FirestoreController from "./FirebaseController";

import { ConfigType } from "@/models/ConfigModel";
import { ResponseData } from "@/models/AppModel";

const ConfigController = () => {
  const app = new FirestoreController();
  const [config, setConfig] = useState("Oi")

  async function writeUserData() {
    const db = app.db;
    const userId = push(child(ref(db), "users")).key;
    await set(ref(db, "users/" + "HSpPrWJK0BeLhHs22t4oUZJjHzs2"), {
      username: "Isadora2",
      email: "isadoratavare85@gmail.com",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }

  async function createConfigUser(
    dataConfig: ConfigType
  ): Promise<ResponseData> {
    const db = app.db;
    const configId = push(child(ref(db), "config")).key;
    return await set(ref(db, "config/" + configId), dataConfig)
      .then((res) => {
        console.log(res);
        return { status: 200, data: null, message: "" };
      })
      .catch((err) => {
        console.log(err);
        return { status: 500, data: null, message: err.message };
      });
  }

  async function getConfig(userId: string): Promise<ResponseData> {
    return await get(
      query(ref(app.db, "config"), orderByChild("userId"), equalTo(userId))
    )
      .then((res: DataSnapshot) => {
        let value;

        res.forEach((item) => {
          value = item.val();
        });
        return { status: 200, data: value, message: "" };
      })
      .catch((err) => {
        return {
          status: 500,
          data: {
            userId,
            geometry: [
              {
                color: "red",
                shape: "cone",
                rotation: [0, 0, 1],
              },
              {
                color: "yellow",
                shape: "cube",
                rotation: [0, 0, 1],
              },
              {
                color: "green",
                shape: "dodecahedron",
                rotation: [0, 0, 1],
              },
            ],
          },
          message: err.message,
        };
      });
  }
  return {
    writeUserData,
    createConfigUser,
    getConfig,
    config
  };
};

export default ConfigController;
