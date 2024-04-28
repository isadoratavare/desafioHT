export type GeometryTypes = "cube" | "cone" | "dodecahedron";

export type GeometryObj = {
  color: string;
  shape: GeometryTypes;
  rotation: number[];
};

export type ConfigType = {
  userId: string;
  geometry: GeometryObj[];
};
