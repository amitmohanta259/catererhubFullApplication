import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light mt-5 p-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Your Catering Company. All rights reserved.</p>
        <p>
          Follow us:
          <a href="#" className="text-light mx-2">Facebook</a> |
          <a href="#" className="text-light mx-2">Instagram</a> |
          <a href="#" className="text-light mx-2">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
