import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Product } from "../src/domain/models/Product.model";
import { globalStyles } from "../src/presentation/styles/globalStyles";
import { Href, useRouter } from "expo-router"; // <-- Importa Href

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

    const handlePress = () => {
        router.push(`/product/${String(product.id)}` as any);
    };

  return (
    <TouchableOpacity style={globalStyles.productCard} onPress={handlePress}>
      <Image source={{ uri: product.image }} style={globalStyles.productImage} />
      <View style={globalStyles.productInfo}>
        <Text style={globalStyles.productName} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={globalStyles.productPrice}>${product.price.toFixed(2)}</Text>
        <Text style={globalStyles.productCategory}>{product.category}</Text>
        {/* Rating */}
        <View style={globalStyles.productRating}>
          <Text style={globalStyles.ratingText}>
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};