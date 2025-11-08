export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// No hay una respuesta específica paginada en la Fake Store API, así que usamos un array directo
export type ProductsResponse = Product[];