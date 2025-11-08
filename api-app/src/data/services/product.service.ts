import { apiClient } from "./api.config";
import { Product, ProductsResponse } from "../../domain/models/Product.model";
import { Category, CategoriesResponse } from "../../domain/models/Category.model";

export class ProductService {
  // Endpoint 1: GET /products
  static async getProducts(): Promise<ProductsResponse> {
    try {
      const response = await apiClient.get<Product[]>("/products");
      return response.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error;
    }
  }

  // Endpoint 2: GET /products/{id}
  static async getProductById(id: number): Promise<Product> {
    try {
      const response = await apiClient.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener producto ${id}:`, error);
      throw error;
    }
  }

  // Endpoint 3: GET /products/categories
  static async getCategories(): Promise<CategoriesResponse> {
    try {
      const response = await apiClient.get<Category[]>("/products/categories");
      return response.data;
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      throw error;
    }
  }
}