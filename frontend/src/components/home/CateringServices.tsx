import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { getCaterers } from "../../services/catererService";

interface Caterer {
  caterer_name: string;
  description : string;
  address: string;
  image_url?: string;
}

const CateringServices: React.FC = () => {
  const [caterers, setCaterers] = useState<Caterer[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const data = await getCaterers();
        setCaterers(data);
      } catch (error) {
        console.error("Error fetching caterers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaterers();
  }, []);

  if (loading) {
    return <p className="text-center my-5">Loading catering services...</p>;
  }

  const visibleCaterers = caterers.slice(0, visibleCount);

  return (
    <div className="container-fluid my-5" style={{ backgroundColor: "black", paddingTop: "1rem", paddingBottom: "1rem" }}>
      {/* Heading + Button Row */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="text-center flex-grow-1 mb-2 mb-md-0" style={{color:"white"}}>Catering Services</h2>
        {caterers.length >= 1 && (
          <button
            className="btn btn-primary ms-3"
            onClick={() => navigate("/caterers/all")}
          >
            View All
          </button>
        )}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
        {visibleCaterers.map((caterer, idx) => (
          <Card
            key={idx}
            image={
              caterer.image_url
                ? `/src/assets/images/chefs_and_caterers/${caterer.image_url}`
                : "/src/assets/images/chefs_and_caterers/chef1.jpg"
            }
            title={caterer.caterer_name}
            desc={caterer.description}
            address= {caterer.address}
            link1="#"
            link2="#"
            btn1="Book Now"
            btn2="Menu"
          />
        ))}
      </div>
    </div>
  );
};

export default CateringServices;
