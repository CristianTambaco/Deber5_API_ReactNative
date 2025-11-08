// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAuth } from '../src/presentation/hooks/useAuth';
import { LoadingState } from '../components/LoadingState';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { user, loading, error } = useAuth();

  if (loading) {
    return <LoadingState message="Verificando autenticación..." />;
  }

  if (error) {
    console.error("Error de autenticación global:", error);
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {user ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="login" options={{ headerShown: false }} />
        )}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}