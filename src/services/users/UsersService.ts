import axios from "axios";

const API_BASE_URL = "https://five-a-side-api-stg.fly.dev/v1";

export async function getUsers(token: string) {
  const api = axios.create({
    baseURL: API_BASE_URL,
  });

  const response = await api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
