// src/data/services/auth.service.ts
import { auth } from "../../../FirebaseConfig"; // Asegúrate de la ruta correcta
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

export class AuthService {
  // Obtener el usuario actual
  static getCurrentUser(): User | null {
    return auth.currentUser;
  }

  // Estado de autenticación
  static onAuthStateChanged(callback: (user: User | null) => void) {
    return auth.onAuthStateChanged(callback);
  }

  // Registro de usuario
  static async registerUser(
    email: string,
    password: string,
    displayName?: string
  ): Promise<{ user?: User; error?: string }> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Opcional: Actualizar el nombre de usuario
      if (displayName) {
        await updateProfile(user, { displayName });
      }

      // Opcional: Enviar correo de verificación
      // await sendEmailVerification(user);

      return { user };
    } catch (error: any) {
      console.error("Error registering user:", error);
      return { error: error.message };
    }
  }

  // Inicio de sesión con email y contraseña
  static async loginUser(
    email: string,
    password: string
  ): Promise<{ user?: User; error?: string }> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Opcional: Verificar si el correo ha sido verificado
      // if (!user.emailVerified) {
      //   return { error: "Por favor, verifica tu correo electrónico." };
      // }

      return { user };
    } catch (error: any) {
      console.error("Error logging in:", error);

      // Capturar errores específicos de Firebase
      let errorMessage = "Error al registrar usuario. Inténtalo de nuevo.";

      if (error.code === "auth/weak-password") {
        errorMessage = "La contraseña debe tener al menos 6 caracteres.";
      } else if (error.code === "auth/email-already-in-use") {
        errorMessage = "Este correo electrónico ya está en uso.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "El correo electrónico no es válido.";
      } else if (error.code === "auth/missing-password") {
        errorMessage = "Por favor, ingresa una contraseña.";
      }



      return { error: error.message };
    }
  }

  // Cerrar sesión
  static async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error("Error logging out:", error);
      throw error;
    }
  }
}