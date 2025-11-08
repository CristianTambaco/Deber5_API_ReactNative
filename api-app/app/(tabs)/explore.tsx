import React from "react";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
import { ErrorState } from "../../components/ErrorState";
import { LoadingState } from "../../components/LoadingState";
import { useCategories } from "../../src/presentation/hooks/useCategories";
import { globalStyles, Colors } from "../../src/presentation/styles/globalStyles";

// Componente para renderizar cada categoría
const CategoryCard = ({ category, onPress }: { category: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={globalStyles.categoryCard}
      onPress={onPress}
      activeOpacity={0.7} // Efecto de presión
    >
      <Text style={globalStyles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default function CategoriesScreen() {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return <LoadingState message="Cargando categorías..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  // Función para manejar el clic en una categoría (puedes implementar la navegación después)
  const handleCategoryPress = (category: string) => {
    console.log(`Categoría seleccionada: ${category}`);
    // Aquí puedes navegar a una nueva pantalla que muestre productos de esa categoría
  };

  const renderCategory = ({ item }: { item: string }) => (
    <CategoryCard category={item} onPress={() => handleCategoryPress(item)} />
  );

  return (
    <View style={globalStyles.container}>
      {/* Título de la sección */}
      <View style={globalStyles.sectionHeader}>
        <Text style={globalStyles.sectionTitle}>Explorar Categorías</Text>
      </View>

      {/* Lista de categorías en cuadrícula */}
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCategory}
        numColumns={2} // Mostrar en 2 columnas
        contentContainerStyle={[globalStyles.container, { padding: 16 }]} // Añadir padding
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }} // Espacio entre columnas
      />
    </View>
  );
}