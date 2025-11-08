// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors, globalStyles } from "../../src/presentation/styles/globalStyles";
import { AuthService } from "../../src/data/services/auth.service";
import { Alert } from "react-native";

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
            await AuthService.logout();
            // La navegación se manejará automáticamente por el hook useAuth en _layout.tsx
          } catch (error) {
            console.error("Error al cerrar sesión:", error);
            Alert.alert("Error", "No se pudo cerrar sesión. Inténtalo de nuevo.");
          }
        },
      },
    ]
  );
};

export default function TabLayout() {
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
          headerRight: () => ( // Añadir botón de logout en el header de index
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