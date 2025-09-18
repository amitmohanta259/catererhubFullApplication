import React, { useState, ChangeEvent, FormEvent } from "react";
import { createCaterer, Caterer } from "../services/catererService";

interface Props {
  onCatererAdded: () => void;
}

const CatererForm: React.FC<Props> = ({ onCatererAdded }) => {
  const [formData, setFormData] = useState<Caterer>({
    caterer_name: "",
    address: "",
    rating: 0,
    phone_no: "",
    email: "",
    owner_name: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === "rating" ? Number(value) : value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createCaterer(formData);
      setFormData({
        caterer_name: "",
        address: "",
        rating: 0,
        phone_no: "",
        email: "",
        owner_name: "",
      });
      onCatererAdded();
    } catch (error) {
      console.error(error);
      alert("Failed to add caterer");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="caterer_name" placeholder="Caterer Name" value={formData.caterer_name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} />
      <input type="text" name="phone_no" placeholder="Phone Number" value={formData.phone_no} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="owner_name" placeholder="Owner Name" value={formData.owner_name} onChange={handleChange} />
      <button type="submit">Add Caterer</button>
    </form>
  );
};

export default CatererForm;
