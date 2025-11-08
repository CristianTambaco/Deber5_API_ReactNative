import { useEffect, useState } from "react";
import { ProductService } from "../../data/services/product.service";
import { Product } from "../../domain/models/Product.model";

export const useProductDetail = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Error al cargar el producto.");
        console.error("Error en useProductDetail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};