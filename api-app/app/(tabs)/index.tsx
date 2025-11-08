import React from "react";
import { ScrollView, View } from "react-native";
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
    <ScrollView style={globalStyles.container}>
      <View>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
}