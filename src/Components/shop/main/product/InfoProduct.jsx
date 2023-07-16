import React from "react";
import { useState } from "react";
import { useGloballContext } from "../../../../Contexts/context";

const InfoProduct = ({ uniqProduct }) => {
  const { cartItems, setCartItems } = useGloballContext();
  
  //-----------------counter functions
  // const counterPlus = (cartItem) => {
  //   const index = cartItems.findIndex((element) => element.id === cartItem.id);

  //   const increaseQty = [...cartItems];
  //   increaseQty[index] = {
  //     id: cartItems[index].id,
  //     image: cartItems[index].image,
  //     name: cartItems[index].name,
  //     price: cartItems[index].price,
  //     qty: cartItems[index].qty + 1,
  //   };

  //   setCartItems(increaseQty);
  // };
  // const counterMines = (cartItem) => {
  //   const index = cartItems.findIndex((element) => element.id === cartItem.id);
  //   const increaseQty = [...cartItems];
  //   if (cartItems[index].qty > 1) {
  //     increaseQty[index] = {
  //       id: cartItems[index].id,
  //       image: cartItems[index].image,
  //       name: cartItems[index].name,
  //       price: cartItems[index].price,
  //       qty: cartItems[index].qty - 1,
  //     };
  //     setCartItems(increaseQty);
  //   }
  // };

  // const cart = JSON.parse(localStorage.getItem(`cartItems`))
  // const inputValue = cart.find( (element) => element.id === uniqProduct.id )

  // ...................................../counter.............................................
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
  return (
    <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
      <article className=" p-3 shadow-sm rounded bg-white">
        <section>
          <header className="row border-bottom">
            <p>{uniqProduct.name}</p>
          </header>
          <div className="mt-4">
            <p className="R-pfont">
              <i className="fa fa-shield"></i> گارانتی اصالت و سلامت فیزیکی کالا
            </p>
          </div>
          <div>
            <p className="R-pfont">
              <i className="fa fa-cart-plus"></i> کالا موجود در انبار
            </p>
          </div>
          <div className="mb-2">
            <a className="bg-light d-inline-block p-1 R-pfont text-dark">
              <i className=" fa fa-heart text-danger"></i> افزودن به علاقه مندی{" "}
            </a>
          </div>

          {/* <div className="d-flex justify-content-between border rounded p-1 w-50">
            <button
              className="btn btn-primary border-0 fw-bolder M-buttonSizing M-couHover"
              onClick={() => counterMines(uniqProduct)}
            >
              -
            </button>
            <p className="M-couterSizing">{}</p>
            <button
              className="btn btn-primary border-0 fw-bolder M-buttonSizing M-couHover"
              onClick={() => counterPlus(uniqProduct)}
            >
              +
            </button>
          </div> */}
          {/* <section className="d-inline-block">
            <div className="R-quantity border p-1 d-flex align-items-center">
              <button
                href="#"
                onClick={() => counterPlus(uniqProduct)}
                className="R-quantity-plus border-0 rounded-1 text-white fw-bold"
              >
                <span>+</span>
              </button>

              <input
                className="R-quantity text-center border-0"
                type="number"
                min="1"
                max="5"
                // value={inputValue ? inputValue.quantity : 0}
                readOnly
              />

              <button
                onClick={counterMines}
                className="R-quantity-minus border-0 rounded-1 text-white fw-bold"
              >
                <span>-</span>
              </button>
            </div>
          </section> */}
          <div className="mt-5 lh-lg">
            <p className="R-pfont">
              <i className="fa fa-info-circle "></i>کاربر گرامی خرید شما هنوز
              نهایی نشده است. برای ثبت سفارش و تکمیل خرید باید ابتدا آدرس خود را
              انتخاب کنید و سپس نحوه ارسال را انتخاب کنید. نحوه ارسال انتخابی
              شما محاسبه و به این مبلغ اضافه شده خواهد شد. و در نهایت پرداخت این
              سفارش صورت میگیرد. پس از ثبت سفارش کالا بر اساس نحوه ارسال که شما
              انتخاب کرده اید کالا برای شما در مدت زمان مذکور ارسال می گردد.
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default InfoProduct;
