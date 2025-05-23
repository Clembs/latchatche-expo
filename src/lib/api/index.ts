import { router } from "expo-router";
import { getItem, deleteItemAsync } from "expo-secure-store";

export const apiBaseUrl =
  process.env.EXPO_PUBLIC_BASE_URL ?? "https://latchatche.clembs.com/api";

type RequestOptions = {
  authed?: boolean;
  loginRedirect?: boolean;
};

export function getSessionToken() {
  return getItem("session_token");
}

async function handleRequest(
  useFetch: (headers?: HeadersInit) => Promise<Response>,
  options?: RequestOptions
) {
  options = { ...options, authed: true, loginRedirect: true };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Si l'utilisateur est connecté, on ajoute le token dans les headers
  let token = getSessionToken();

  if (options.authed && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await useFetch(headers);

  // si le token est expiré ou invalide
  // on navigue vers la page de login et on supprime le token
  if (response.status === 401 && options.loginRedirect) {
    router.replace("/login");

    await deleteItemAsync("session_token");
  }

  return response;
}

export async function apiGet(endpoint: string, options?: RequestOptions) {
  return await handleRequest(
    (headers) =>
      fetch(`${apiBaseUrl}${endpoint}`, {
        headers,
      }),
    options
  );
}

export async function apiPost(
  endpoint: string,
  body: BodyInit,
  options?: RequestOptions
) {
  return await handleRequest(
    (headers) =>
      fetch(`${apiBaseUrl}${endpoint}`, {
        method: "POST",
        headers,
        body,
      }),
    options
  );
}
