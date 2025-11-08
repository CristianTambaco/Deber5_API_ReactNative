// app/login.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { AuthService } from "../src/data/services/auth.service";
import { useRouter } from "expo-router";
import { globalStyles, Colors } from "../src/presentation/styles/globalStyles";
import { LoadingState } from "../components/LoadingState";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // true para login, false para registro
  const [displayName, setDisplayName] = useState(""); // Solo para registro
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos obligatorios.");
      return;
    }

    setLoading(true);

    let result;
    if (isLogin) {
      result = await AuthService.loginUser(email, password);
    } else {
      result = await AuthService.registerUser(email, password, displayName);
    }

    setLoading(false);

    if (result.error) {
      Alert.alert("Error", result.error);
    } else {
      // Autenticación exitosa
      console.log("Autenticación exitosa:", result.user);
      router.replace("/(tabs)"); // Reemplaza la pantalla actual con las tabs
    }
  };

  if (loading) {
    return <LoadingState message={isLogin ? "Iniciando sesión..." : "Registrando..."} />;
  }

  return (
    <ScrollView
      style={[globalStyles.container, styles.container]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>{isLogin ? "Iniciar Sesión" : "Registrarse"}</Text>

      <View style={styles.form}>
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario (Opcional)"
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>
            {isLogin ? "Iniciar Sesión" : "Registrarse"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.toggleButton]}
          onPress={() => setIsLogin(!isLogin)}
        >
          <Text style={styles.buttonText}>
            {isLogin
              ? "¿No tienes cuenta? Regístrate"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: Colors.cardBackground,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
});