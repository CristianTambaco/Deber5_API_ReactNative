import React from "react";
import { FlatList, View } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { ErrorState } from "../../components/ErrorState";
import { LoadingState } from "../../components/LoadingState";
import { useProducts } from "../../src/presentation/hooks/useProducts";
import { globalStyles } from "../../src/presentation/styles/globalStyles";

export default function ProductsScreen() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <LoadingState message="Cargando productos..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const renderProduct = ({ item }: { item: any }) => (
    <ProductCard product={item} />
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        contentContainerStyle={globalStyles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}