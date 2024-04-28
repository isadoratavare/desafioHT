import {
  ref,
  get,
  query,
  equalTo,
  orderByChild,
  push,
  child,
  set,
} from "@firebase/database";
import { ResponseData } from "@/models/AppModel";
import Firebase from "./Firebase";
import { ConfigType, GeometryObj } from "@/models/ConfigModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ConfigContextType = {
  config: GeometryObj[];
  updateConfig: (data: GeometryObj[]) => Promise<ResponseData>;
  getConfig: (userId: string | null) => Promise<ResponseData>;
  createConfigUser: (config: ConfigType) => Promise<ResponseData>;
  setConfig: (data: GeometryObj[]) => void
};

export function ConfigContext() {
  const app = new Firebase();
  const db = app.db;

  async function getConfig(userId: string | null): Promise<ResponseData> {
    const mockConfig = {
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
    };

    if (!userId) {
      return {
        status: 500,
        data: mockConfig,
        message: "No user available",
      };
    }

    try {
      const res = await get(
        query(ref(app.db, "config"), orderByChild("userId"), equalTo(userId))
      );

      if (res.exists()) {
        let value;
        res.forEach((item) => {
          value = item.val();
        });
        return { status: 200, data: value, message: "" };
      } else {
        return { status: 500, data: mockConfig, message: "No data available" };
      }
    } catch (error: any) {
      return { status: 500, data: mockConfig, message: error.message };
    }
  }
  async function updateConfig(data: GeometryObj[], configId: string) {
    const userId = await AsyncStorage.getItem("userId");
    if (!userId) {
      return {
        status: 500,
        data: [],
        message: "No user available",
      };
    }

    if (!configId) {
      return { status: 500, data: [], message: "No config available" };
    }

    const dataConfig = {
      id: configId,
      userId,
      geometry: data,
    };
    return await set(ref(db, "config/" + configId), dataConfig)
      .then((res) => {
        return {
          status: 200,
          data: null,
          message: "Configuração atualizada com sucesso!",
        };
      })
      .catch((err) => {
        return { status: 500, data: null, message: err.message };
      });
  }
  async function createConfigUser(
    dataConfig: ConfigType
  ): Promise<ResponseData> {
    const configId = push(child(ref(db), "config")).key;
    const data = {
      id: configId,
      ...dataConfig,
    };
    return await set(ref(db, "config/" + configId), data)
      .then((res) => {
        return { status: 200, data: null, message: "" };
      })
      .catch((err) => {
        return { status: 500, data: null, message: err.message };
      });
  }

  return ({
    getConfig,
    updateConfig,
    createConfigUser,
  }
  );
}
