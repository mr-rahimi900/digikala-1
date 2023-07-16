import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useGloballContext } from "../../../../Contexts/context";

const TotalPrice = () => {
  // .....................................total price.............................................

  const { cartItems, setCartItems } = useGloballContext();

  let totalPrice = 0;
  let totalPricePay = 0;
  cartItems &&
    cartItems.map((cartItem) => {
      let price = Number(cartItem.price);
      let quantity = Number(cartItem.qty);
      let total = price * quantity;
      totalPrice = totalPrice + total;
      totalPricePay = totalPrice + 54000;
    });

  // ...................................../total price.............................................

  // .....................................total cart.............................................

  // let cartItems = JSON.parse(localStorage.getItem('cartItems'))

  let sum = 0;
  cartItems &&
    cartItems.map((cartItem) => {
      sum = sum + cartItem.qty;
    });

  // ...................................../total cart.............................................

  // .....................................payment.............................................
  const navigate = useNavigate();

  const payment = () => {
    setCartItems([]);

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
    toast.success(`خرید با موفقیت انجام شد`, {
      position: "top-center",
      rtl: true,
      theme: "colored",
      icon: "🛒",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: false,
      hideProgressBar: true,
    });
  };

  // ...................................../payment.............................................
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
    <section className="D-paymentBox bg-white p-3 rounded-2 mt-3 mb-4">
      <div className=" d-flex justify-content-between D-total">
        <p className="text-muted pb-2">قیمت کالاها ({sum})</p>
        <p className="text-muted">{commafy(totalPrice)} تومان</p>
      </div>
      <div className=" d-flex justify-content-between pt-3">
        <p className="text-muted">جمع سبد خرید</p>
        <p className="text-dark">{commafy(totalPrice)} تومان</p>
      </div>
      <div className=" d-flex justify-content-between">
        <p className="text-muted">هزینه ارسال</p>
        <p className="text-warning">54,000 تومان</p>
      </div>
      <div className="D-description-pay D-total pb-3">
        <i className="fa fa-info-circle me-1"></i>
        کاربر گرامی کالاها بر اساس نوع ارسالی که انتخاب می کنید در مدت زمان ذکر
        شده ارسال می شود.
      </div>
      <div className=" d-flex justify-content-between pt-2">
        <p className="text-muted">مبلغ قابل پرداخت</p>
        <p className="text-dark">{commafy(totalPricePay)} تومان</p>
      </div>
      <div>
        <button
          onClick={payment}
          type="button"
          className="btn btn-danger text-white w-100"
        >
          ثبت و سفارش و کد رهگیری
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default TotalPrice;
