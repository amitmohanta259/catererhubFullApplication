import React from "react";

const Cities: React.FC = () => {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco"];

  return (
    <div className="container mt-5">
      <h2>We Cater in These Cities</h2>
      <div className="row">
        {cities.map((city, idx) => (
          <div key={idx} className="col-6 col-md-4 col-lg-2 mb-3">
            <div className="p-3 border text-center bg-light">{city}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
