import { useEffect, useState } from "react";
import { ProductService } from "../../data/services/product.service";
import { Category } from "../../domain/models/Category.model";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProductService.getCategories();
        setCategories(data);
      } catch (err) {
        setError("Error al cargar categorías. Intenta nuevamente.");
        console.error("Error en useCategories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};