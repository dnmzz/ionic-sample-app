import axios from "axios";

const API_BASE_URL = "https://five-a-side-api-stg.fly.dev/v1";

export async function login(email: string, password: string): Promise<string> {
  const loginData = {
    email,
    password,
  };
  const api = axios.create({
    baseURL: API_BASE_URL,
  });
  const response = await api.post("/auth/login", loginData);
  return response.data.accessToken;
}
