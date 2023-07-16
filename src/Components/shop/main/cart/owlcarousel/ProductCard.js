/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGloballContext } from "../../../../../Contexts/context";

const ProductCard = ({ productCart, colorSelection }) => {
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

  // .....................................add products from bottom Owlcarousel in cart component.............................................

  const { cartItems, setCartItems } = useGloballContext();

  const handelCart = (productCart) => {
    const exist = cartItems.find((element) => element.id === productCart.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === productCart.id
            ? { ...exist, qty: exist.qty + 1 }
            : element
        )
      );
    } else {
      setCartItems([...cartItems, { ...productCart, qty: 1 }]);
    }

  };

  return (
    <div>
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
                href="#"
                className="text-dark border-0 bg-white"
                onClick={() => handelCart(productCart)}
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>افزودن به علاقه مندی ها</Tooltip>}
          >
            <div className="h-product-fave-icon shadow">
              <a href="#" className="text-dark">
                <i className="fa fa-heart"></i>
              </a>
            </div>
          </OverlayTrigger>
        </div>

        <Link to={`/${productCart.id}`} className="h-product-link text-dark">
          <div className="h-product-img">
            <img src={productCart.image} alt="" className="img-fluid" />
          </div>
          <div className="h-product-name my-3">
            <h6>{productCart.name}</h6>
          </div>
          <div className="h-product-price text-end">
            <h6>{commafy(productCart.price)} تومان</h6>
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
    </div>
  );
};

export default ProductCard;
