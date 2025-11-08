import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../src/presentation/styles/globalStyles";

interface CategoryCardProps {
  category: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <View style={globalStyles.categoryCard}>
      <Text style={globalStyles.categoryText}>{category}</Text>
    </View>
  );
};