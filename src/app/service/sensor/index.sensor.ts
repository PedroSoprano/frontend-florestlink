import { api } from "../api";

export async function getSensor() {
  return await api.get("/sensor");
}

export async function createSensor(data: {
  name: string;
  type: string;
  latitude: string;
  longitude: string;
}) {
  const payload = {
    name: data.name,
    type: data.type,
    latitude: data.latitude,
    longitude: data.longitude,
  };
  return await api.post("/sensor", payload);
}
