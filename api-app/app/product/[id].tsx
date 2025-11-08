import { ErrorState } from "@/components/ErrorState";
import { LoadingState } from "@/components/LoadingState";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useProductDetail } from "../../src/presentation/hooks/useProductDetail";
import { globalStyles } from "../../src/presentation/styles/globalStyles";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!id) {
    return <LoadingState message="Cargando detalles..." />;
  }

  const productId = parseInt(id as string, 10);
  if (isNaN(productId)) {
    return <ErrorState message="ID de producto inválido" />;
  }

  const { product, loading, error } = useProductDetail(productId);

  if (loading) {
    return <LoadingState message="Cargando detalles del producto..." />;
  }

  if (error || !product) {
    return <ErrorState message={error || "Producto no encontrado"} />;
  }

  return (
    <ScrollView style={globalStyles.detailContainer}>
      <Image
        source={{ uri: product.image }}
        style={globalStyles.detailImage}
        contentFit="contain"
        transition={300}
      />
      <View style={globalStyles.detailInfo}>
        <Text style={globalStyles.detailTitle}>{product.title}</Text>
        <Text style={globalStyles.detailPrice}>${product.price.toFixed(2)}</Text>
        <Text style={globalStyles.detailCategory}>Categoría: {product.category}</Text>
        <View style={globalStyles.detailRating}>
          <Text style={globalStyles.ratingText}>
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </Text>
        </View>
        <Text style={globalStyles.detailDescription}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}