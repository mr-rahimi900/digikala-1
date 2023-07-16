import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGloballContext } from "../../../../Contexts/context";

const MainLeft = () => {
  // .....................................total price.............................................
  const { cartItems } = useGloballContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotalPrice = () => {
      const res = cartItems.reduce((prev, item) => {
        return prev + item.price * item.qty;
      }, 0)
      setTotal(res)
    }
    getTotalPrice();
  }, [cartItems])

  // .....................................total cart.............................................

  let sum = 0;
  cartItems &&
    cartItems.map((cartItem) => {
      sum = sum + cartItem.qty;
    });

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
    <div className="col-sm-12 col-xl-3">
      <aside className="p-3 border rounded bg-white shadow">
        <div className="d-flex justify-content-between">
          <p> قیمت کالاها ({sum}) </p>
          <p> {commafy(total)} تومان </p>
        </div>
        <div className="d-flex justify-content-between">
          <p> تخفیف کالاها </p>
          <p> - تومان </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p> جمع سبد خرید </p>
          <p> {commafy(total)} تومان </p>
        </div>
        <div>
          <p>
            <i className="fa fa-info-circle"></i> کاربر گرامی خرید شما هنوز
            نهایی نشده است. برای ثبت سفارش و تکمیل خرید باید ابتدا آدرس خود را
            انتخاب کنید و سپس نحوه ارسال را انتخاب کنید. نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه شده خواهد شد. و در نهایت پرداخت این سفارش
            صورت میگیرد.
          </p>
        </div>
        <div className="M-buttonHeight">
          <Link to="/Payment">
            <button className="w-100 h-100 bg-danger text-white border-0 rounded M-subHover">
              تکمیل فرآیند خرید
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default MainLeft;
