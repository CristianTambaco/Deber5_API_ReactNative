// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors, globalStyles } from "../../src/presentation/styles/globalStyles";
import { Alert } from "react-native";
import { useRouter } from "expo-router"; // Importa useRouter

import { auth } from "../../FirebaseConfig"; // Asegúrate de la ruta correcta

export default function TabLayout() {
  const router = useRouter(); // Usa el hook aquí, dentro del componente

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que deseas cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Aceptar",
          onPress: async () => {
            try {
              // Cierra la sesión con Firebase
              await auth.signOut(); // Asegúrate de importar 'auth' si no lo has hecho
              // Navega a la pantalla de login
              router.replace("/login");
            } catch (error) {
              console.error("Error al cerrar sesión:", error);
              Alert.alert("Error", "No se pudo cerrar sesión. Inténtalo de nuevo.");
            }
          },
        },
      ]
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.cardBackground,
        },
        headerTintColor: Colors.text,
        tabBarStyle: globalStyles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube" size={size} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color={Colors.error}
              style={{ marginRight: 15 }}
              onPress={handleLogout}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Categorías",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}