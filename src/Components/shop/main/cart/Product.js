import React, { useEffect } from "react";
import { useGloballContext } from "../../../../Contexts/context";

const Product = ({ cartItem }) => {
  const { cartItems, setCartItems } = useGloballContext();

  //-----------------counter functions
  // console.log(cartItems);
  const counterPlus = (cartItem) => {
    const index = cartItems.findIndex((element) => element.id === cartItem.id);
    
    const increaseQty = [...cartItems];
    increaseQty[index] = {
      id: cartItems[index].id,
      image: cartItems[index].image,
      name: cartItems[index].name,
      price: cartItems[index].price,
      qty: cartItems[index].qty + 1,
    };
    
    setCartItems(increaseQty);
  };
  const counterMines = (cartItem) => {
    const index = cartItems.findIndex((element) => element.id === cartItem.id);
    const increaseQty = [...cartItems];
    if (cartItems[index].qty > 1) {
      increaseQty[index] = {
        id: cartItems[index].id,
        image: cartItems[index].image,
        name: cartItems[index].name,
        price: cartItems[index].price,
        qty: cartItems[index].qty - 1,
      };
      setCartItems(increaseQty);
    }
  };

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

  //----------remove Product from cart

  const handelRemove = (productCart) => {
    setCartItems(cartItems.filter((element) => element.id !== productCart.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <article className="mb-3">
        <div className="row">
          <div className="col-2">
            <img src={cartItem.image} width="100%" alt={cartItem.name} />
          </div>
          <div className="col-8">
            <h5> {cartItem.name}</h5>
            <p>
              <i className="fa fa-circle"></i> قهوه ای{" "}
            </p>
            <p>
              <i className="fa fa-shield"></i> گارانتی اصالت و سلامت فیزیکی کالا{" "}
            </p>
            <p>
              <i className="fa fa-home"></i> کالا موجود در انبار{" "}
            </p>
            <div className="d-flex">
              <div className="d-flex justify-content-between border rounded p-1">
                <button
                  className="btn btn-primary border-0 fw-bolder M-buttonSizing M-couHover"
                  onClick={() => counterMines(cartItem)}
                >
                  -
                </button>
                <p className="M-couterSizing">{cartItem.qty}</p>
                <button
                  className="btn btn-primary border-0 fw-bolder M-buttonSizing M-couHover"
                  onClick={() => counterPlus(cartItem, cartItem.id)}
                >
                  +
                </button>
              </div>
              <button
                className="border-0 bg-white ms-5 fw-light text-secondary M-tshHover"
                onClick={() => handelRemove(cartItem)}
              >
                <i className="fa fa-trash"></i> حذف از سبد{" "}
              </button>
            </div>
          </div>
          <div className="col-2 d-flex align-items-end justify-content-end">
            <p>
              <b> {commafy(cartItem.price)} تومان </b>{" "}
            </p>
          </div>
        </div>
      </article>
      <hr />
    </div>
  );
};

export default Product;
