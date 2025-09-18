import React from "react";
import { Caterer } from "../services/catererService";

interface Props {
  caterers: Caterer[];
}

const CatererList: React.FC<Props> = ({ caterers }) => {
  if (!caterers.length) return <p>No caterers found.</p>;

  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Rating</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {caterers.map(c => (
          <tr key={c.id || c.caterer_name}>
            <td>{c.caterer_name}</td>
            <td>{c.address}</td>
            <td>{c.rating}</td>
            <td>{c.phone_no}</td>
            <td>{c.email}</td>
            <td>{c.owner_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CatererList;
