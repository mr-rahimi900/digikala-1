import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useGloballContext } from "../../../../Contexts/context";

const ProductCard = ({ product, colorSelection }) => {
  const {
    cartItems,
    setCartItems,
    favorites,
    setFavorites,
    compares,
    setCompares,
  } = useGloballContext();

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  //--------------Add  products to Cart
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
      Swal.fire({
        text: "محصول از علاقه مندی ها حذف شد",
        icon: "error",
        confirmButtonText: "حله",
        closeOnEsc: true,
      });
    } else {
      setFavorites([...favorites, { ...product }]);
      Swal.fire({
        title: "عملیات با موفقیت انجام شد",
        text: "محصول به علاقه مندی ها اضافه شد",
        icon: "success",
        confirmButtonText: "حله",
        closeOnEsc: true,
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  //----------------Add to Compare
  const addCompare = (product) => {
    const exist = compares.find((element) => element.id === product.id);
    if (exist) {
      setCompares(compares.filter((element) => element.id !== product.id));
      Swal.fire({
        text: "محصول از مقایسه حذف شد",
        icon: "error",
        confirmButtonText: "حله",
        closeOnEsc: true,
      });
    } else if (compares.length < 2) {
      setCompares([...compares, { ...product }]);
      Swal.fire({
        title: "عملیات موفقیت آمیز بود",
        text: "محصول برای مقایسه اضافه شد",
        icon: "success",
        confirmButtonText: "حله",
        closeOnEsc: true,
      });
    } else if (compares.length > 4) {
      Swal.fire({
        text: "شما دو محصول برای مقایسه دارید",
        icon: "warning",
        confirmButtonText: "حله",
        closeOnEsc: true,
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("compares", JSON.stringify(compares));
  }, [compares]);

  return (
    <>
      <section
        className="h-product p-2 position-relative rounded-1 bg-white"
        dir="rtl"
      >
        <div className="h-product-icons-container">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>افزودن به سبد خرید</Tooltip>}
          >
            <div className="h-product-cart-icon shadow">
              <button
                type="button"
                className="text-dark border-0 bg-transparent"
                onClick={() => addHandler(product)}
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>افزودن به علاقه مندی</Tooltip>}
          >
            <div className="h-product-fave-icon shadow">
              <button
                type="button"
                className="text-dark border-0 bg-transparent"
                onClick={() => addFav(product)}
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>برای مقایسه محصول کلیک کنید</Tooltip>}
          >
            <div className="h-product-compare-icon shadow">
              <button
                type="button"
                className="text-dark border-0 bg-transparent"
                onClick={() => addCompare(product)}
              >
                <img src="./images/justice-scale.png" alt="" />
              </button>
            </div>
          </OverlayTrigger>
        </div>
        <Link to={`/${product.id}`} className="h-product-link text-dark">
          <div className="h-product-img">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="h-product-name my-3">
            <h6>{product.name}</h6>
          </div>
          <div className="h-product-price text-end">
            <h6>{commafy(product.price)} تومان</h6>
          </div>
          {colorSelection && (
            <div className="h-product-color">
              <div className="h-product-color-item bg-danger rounded-circle border-2"></div>
              <div className="h-product-color-item bg-success rounded-circle"></div>
              <div className="h-product-color-item bg-secondary rounded-circle"></div>
              <div className="h-product-color-item bg-warning rounded-circle"></div>
              <div className="h-product-color-item bg-white rounded-circle"></div>
            </div>
          )}
        </Link>
      </section>
    </>
  );
};

export default ProductCard;
