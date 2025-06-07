"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  product_name: string;
  product_price: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      {userName && (
        <h2 className="mb-4 text-xl font-semibold">Welcome, {userName}!</h2>
      )}

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow m-2 w-60"
          >
            <h1 className="text-lg font-semibold">{product.product_name}</h1>
            <h1 className="text-lg font-semibold">{product.user_id}</h1>
            <p className="text-gray-600">Price: ${product.product_price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
