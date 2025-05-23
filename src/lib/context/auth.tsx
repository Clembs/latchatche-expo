import { apiPost, getSessionToken } from "$lib/api";
import { getCurrentUser, User } from "$lib/api/users";
import { router } from "expo-router";
import { setItemAsync } from "expo-secure-store";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthContextProps = {
  currentUser: User | null;
  isReady: boolean;
  login: (
    username: string,
    password: string
  ) => Promise<void | { error: string }>;
  logout: () => Promise<void | { error: string }>;
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  isReady: false,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    const response = await apiPost(
      "/login",
      JSON.stringify({
        username,
        password,
      }),
      { authed: false }
    );

    if (response.status === 200) {
      const data = await response.json();
      await setItemAsync("session_token", data.token);

      // On envoie une requête au serveur pour vérifier si le token est valide
      const user = await getCurrentUser();
      // On met dans le contexte la réponse
      setCurrentUser(user);

      router.replace("/");
    } else {
      const data = await response.json();

      return { error: data.error };
    }
  };

  const logout = async () => {
    setCurrentUser(null);
    router.replace("/login");
  };

  // getAuth permet de vérifier si les infos de l'utilisateur existent en utilisant
  // le jeton sauvegardé en stockage (s'il existe). si l'utilisateur existe, ses données
  // sont passées dans le contexte (pour un stockage en mémoire)
  useEffect(() => {
    const getAuth = async () => {
      const token = getSessionToken();

      if (token) {
        const user = await getCurrentUser();
        setCurrentUser(user);
        setIsReady(true);
      }
    };

    getAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isReady,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
