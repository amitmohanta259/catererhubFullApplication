// src/components/CatererTable.tsx
import React, { useEffect, useState } from "react";
import { getCaterers, Caterer } from "../services/caterer.service";

const CatererTable: React.FC = () => {
  const [caterers, setCaterers] = useState<Caterer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const data = await getCaterers();
        setCaterers(data);
      } catch (error) {
        console.error("Failed to fetch caterers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaterers();
  }, []);

  if (loading) return <p>Loading caterers...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Caterer List</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Owner</th>
          </tr>
        </thead>
        <tbody>
          {caterers.map((caterer) => (
            <tr key={caterer.id}>
              <td className="border px-4 py-2">{caterer.id}</td>
              <td className="border px-4 py-2">{caterer.caterer_name}</td>
              <td className="border px-4 py-2">{caterer.address}</td>
              <td className="border px-4 py-2">{caterer.rating}</td>
              <td className="border px-4 py-2">{caterer.phone_no}</td>
              <td className="border px-4 py-2">{caterer.email}</td>
              <td className="border px-4 py-2">{caterer.owner_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatererTable;
