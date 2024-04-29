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
import Firebase from "./Firebase";
import { ConfigType, GeometryObj, ResponseData } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ConfigContextType = {
  config: GeometryObj[];
  updateConfig: (data: GeometryObj[]) => Promise<ResponseData>;
  getConfig: (userId: string | null) => Promise<ResponseData>;
  createConfigUser: (config: ConfigType) => Promise<ResponseData>;
  setConfig: (data: GeometryObj[]) => void;
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

    return await get(
      query(ref(app.db, "config"), orderByChild("userId"), equalTo(userId))
    )
      .then((res) => {
        if (res.exists()) {
          let value;
          res.forEach((item) => {
            value = item.val();
          });
          return {
            status: 200, data: value, message: "No data available"
          };
        }
        return { status: 500, data: mockConfig, message: "No data available" };
      })
      .catch((e) => {
        return { status: 500, data: mockConfig, message: "No data available" };
      });

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
      throw new Error("Config not found.");
    }

    const dataConfig = {
      id: configId,
      userId,
      geometry: data,
    };
    return await set(ref(db, "config/" + configId), dataConfig).catch((err) => {
      throw new Error(err.message);
    });
  }

  return {
    getConfig,
    updateConfig,
  };
}
