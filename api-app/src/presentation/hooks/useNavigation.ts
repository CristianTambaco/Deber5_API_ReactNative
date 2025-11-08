// src/presentation/hooks/useNavigation.ts
import { useNavigation } from 'expo-router';

export const useAppNavigation = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    // Navegar a la pantalla de login
    if (navigation) {
      // @ts-ignore - Esto es necesario para forzar la navegación a una ruta específica
      navigation.navigate('login');
    }
  };

  return {
    navigateToLogin,
  };
};