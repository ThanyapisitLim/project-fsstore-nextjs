"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const router = useRouter();
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      router.push("/login");
    }
  }, [router]);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const userId = localStorage.getItem("userId"); 
    if (!userId) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_name: productName,
        product_price: Number(productPrice),
        user_id: Number(userId), // ส่ง user_id ไปด้วย
      }),
    });
    setProductName("");
    setProductPrice("");
  }


  return (
    <div className="flex flex-col items-center justify-center mt-30">
      <h1 className="text-2xl font-bold mb-5">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Name..."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Price</label>
          <input
            type="number"
            placeholder="Price..."
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Add
        </button>
      </form>
    </div>
  )
}
