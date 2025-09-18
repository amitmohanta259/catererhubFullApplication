import React, { useState, useEffect } from "react";
import CatererForm from "../components/CatererForm";
import CatererList from "../components/CatererList";
import { getCaterers, Caterer } from "../services/catererService";

const CaterersPage: React.FC = () => {
  const [caterers, setCaterers] = useState<Caterer[]>([]);

  const fetchCaterers = async () => {
    try {
      const data = await getCaterers();
      setCaterers(data);
    } catch (error) {
      console.error("Error fetching caterers:", error);
    }
  };

  useEffect(() => {
    fetchCaterers();
  }, []);

  return (
    <div>
      <h1>Caterers</h1>
      <CatererForm onCatererAdded={fetchCaterers} />
      <CatererList caterers={caterers} />
    </div>
  );
};

export default CaterersPage;
