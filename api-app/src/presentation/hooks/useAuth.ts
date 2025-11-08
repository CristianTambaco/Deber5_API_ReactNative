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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, error };
};