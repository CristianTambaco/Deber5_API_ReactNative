import { StyleSheet } from "react-native";

export const Colors = {
  primary: "#3498db",       // Azul
  secondary: "#e74c3c",     // Rojo
  background: "#f5f5f5",    // Fondo claro
  cardBackground: "#ffffff",// Fondo de tarjetas
  text: "#333333",          // Texto principal
  textSecondary: "#666666", // Texto secundario
  success: "#2ecc71",       // Verde
  error: "#e74c3c",         // Rojo error
  border: "#dddddd",        // Bordes
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  // --- Product Card ---
  productCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    backgroundColor: Colors.border,
  },
  productInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontStyle: "italic",
  },
  productDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    color: Colors.secondary,
    marginLeft: 4,
  },
  // --- Category Card ---
  categoryCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 120,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    textAlign: "center",
  },
  // --- Loading ---
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  // --- Error ---
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  errorText: {
    fontSize: 16,
    color: Colors.error,
    textAlign: "center",
    marginBottom: 16,
  },
  // --- Detail ---
  detailContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  detailImage: {
    width: "100%",
    height: 300,
    backgroundColor: Colors.border,
  },
  detailInfo: {
    padding: 16,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 8,
  },
  detailPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 22,
    marginBottom: 16,
  },
  detailCategory: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontStyle: "italic",
    marginBottom: 8,
  },
  detailRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  // --- Tabs ---
  tabBarStyle: {
    backgroundColor: Colors.cardBackground,
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});