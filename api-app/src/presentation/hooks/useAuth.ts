// src/presentation/hooks/useAuth.ts
import { useEffect, useState } from "react";
import { auth } from "../../../FirebaseConfig"; // Importa directamente auth
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Usa auth.onAuthStateChanged directamente
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setError("Error al verificar el estado de autenticación.");
        setLoading(false);
        console.error("Auth state change error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return { user, loading, error };
};