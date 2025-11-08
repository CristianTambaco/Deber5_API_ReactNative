import { useEffect, useState } from "react";
import { ProductService } from "../../data/services/product.service";
import { Product } from "../../domain/models/Product.model";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error al cargar productos. Intenta nuevamente.");
        console.error("Error en useProducts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};