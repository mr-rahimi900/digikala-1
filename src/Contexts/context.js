import React, { useContext, useState, useEffect } from "react";
import { getBrands } from "../Components/products/brands";
import { getMostVisitedProducts, getSuggestedProducts, productsData } from "../Components/products/productsData";

const AppContext = React.createContext();

const getDataFromLs = (lsName) => {
  const lsData = localStorage.getItem(lsName);
  if (lsData) {
    return JSON.parse(lsData);
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDataFromLs("cartItems"));
  const [favorites, setFavorites] = useState(getDataFromLs("favorites"));
  const [compares, setCompares] = useState(getDataFromLs("compares"));
  const mostVisitedProducts = getMostVisitedProducts();
  const suggestedProducts = getSuggestedProducts();
  const brands = getBrands();
  // ---------------------------------------
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        brands,
        compares,
        productsData,
        suggestedProducts,
        mostVisitedProducts,
        setFavorites,
        setCartItems,
        setCompares,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGloballContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
