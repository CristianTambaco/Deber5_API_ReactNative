import React from "react";
import { FlatList, View } from "react-native";
import { CategoryCard } from "../../components/CategoryCard";
import { ErrorState } from "../../components/ErrorState";
import { LoadingState } from "../../components/LoadingState";
import { useCategories } from "../../src/presentation/hooks/useCategories";
import { globalStyles } from "../../src/presentation/styles/globalStyles";

export default function CategoriesScreen() {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return <LoadingState message="Cargando categorías..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const renderCategory = ({ item }: { item: any }) => (
    <CategoryCard category={item} />
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCategory}
        horizontal={false}
        numColumns={2} // Muestra categorías en 2 columnas
        contentContainerStyle={globalStyles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}