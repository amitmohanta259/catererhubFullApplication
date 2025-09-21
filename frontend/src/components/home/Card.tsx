import React from "react";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  address: string;
  link1: string;
  link2: string;
  btn1: string;
  btn2: string;
}

const Card: React.FC<CardProps> = ({ image, title, desc, link1, link2, btn1, btn2 }) => {
  return (
    <div className="col pt-2">
      <div className="p-3 border bg-light h-100">
        <div className="card h-100 shadow-sm">
          <img
            src={image}
            onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/src/assets/images/chefs_and_caterers/chef1.jpg";
              }}
            className="card-img-top"
            alt={title}
            style={{ height: "10rem", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text" style={{ fontSize: "80%" }}>{desc}</p>
            </div>

            <div className="mt-3 d-flex justify-content-center gap-2">
              <a href={link1} className="btn btn-primary flex-fill" style={{ fontSize: "80%" }}>
                {btn1}
              </a>
              <a href={link2} className="btn btn-primary flex-fill" style={{ fontSize: "80%" }}>
                {btn2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
