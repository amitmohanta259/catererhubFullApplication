// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import CaterersPage from "./pages/CaterersPage";
// // import FoodPage from "./pages/FoodPage"; // ❌ Commented out for now
//
// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navigation Menu */}
//         <nav className="bg-gray-800 text-white p-4 flex gap-4">
//           <Link to="/" className="hover:text-gray-300">
//             Caterers
//           </Link>
//           {/* <Link to="/food" className="hover:text-gray-300">
//             Food
//           </Link> */}
//         </nav>
//
//         {/* Main Content */}
//         <main className="flex-1 p-6 bg-gray-100">
//           <Routes>
//             <Route path="/" element={<CaterersPage />} />
//             {/* <Route path="/food" element={<FoodPage />} /> */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };
//
// export default App;


import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/home/Carousel";
import Cuisines from "./components/home/Cuisines";
import CateringServices from "./components/home/CateringServices";
import TopRatedCaterers from "./components/home/TopRatedCaterers";
import Cities from "./components/home/Cities";
import Footer from "./components/home/Footer";

const App: React.FC = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Navbar />
      <Carousel />
      <Cuisines />
      <CateringServices />
      <TopRatedCaterers />
      <Cities />
      <Footer />
    </div>
  );
};


export default App;

