import { api } from "../api";
export async function getSensor() {
  return api.get("/sensor");
}
