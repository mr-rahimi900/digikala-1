import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useGloballContext } from "../../../../Contexts/context";
import CompareProductCard from "./CompareProductCard";

const CompareProducts = () => {
  const {
    compares,
    setCompares,
    cartItems,
    setCartItems,
    favorites,
    setFavorites,
  } = useGloballContext();

  const [show, setShow] = useState(false);

  //-------------Delete Product From Compare
  const handleDelete = (productId) => {
    setCompares(compares.filter((element) => element.id !== productId));
  };
  useEffect(() => {
    localStorage.setItem("compares", JSON.stringify(compares));
  }, [compares]);
  const addHandler = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    Swal.fire({
      title: "عملیات با موفقیت انجام شد",
      text: "محصول به سبد خرید اضافه شد",
      icon: "success",
      confirmButtonText: "حله",
      closeOnEsc: true,
    });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //--------------Add  products to Favorite
  const addFav = (product) => {
    const exist = favorites.find((element) => element.id === product.id);
    if (exist) {
      setFavorites(favorites.filter((element) => element.id !== product.id));
      setShow(false);
    } else {
      setFavorites([...favorites, { ...product }]);
      setShow(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center D-header-payment mt-4">
        <h2 className="h6 fw-bold">مقایسه محصولات</h2>
      </header>

      <section className="p-3 border rounded bg-white shadow mt-4">
        <div className="row">
          {compares &&
            compares.map((compareProduct) => (
              <CompareProductCard
                key={compareProduct.id}
                compareProduct={compareProduct}
                handleDelete={handleDelete}
                addHandler={addHandler}
                addFav={addFav}
                show={show}
              />
            ))}
        </div>
        {compares.length < 1 && (
          <section className="d-flex justify-content-center align-items-center flex-column p-3">
            <h5 className="text-center text-danger fw-bolder">
              <span className="shadow rounded p-2">
                محصولی برای مقایسه نداریم ☺
              </span>
            </h5>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-outline-info">
                <Link to="/" className="bg-text-dark">
                  افزودن محصول
                </Link>
              </button>
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default CompareProducts;
