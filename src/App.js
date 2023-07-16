import React from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./files/css/style.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/shop/main/footer/Footer";
import Header from "./Components/shop/main/header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
