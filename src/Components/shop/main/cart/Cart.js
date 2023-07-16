import React from "react";
import OwlCarouselC from "./owlcarousel/OwlCarouselC";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Cart = () => {


  return (
    <div className="">
      <section className="M-head container-xxl my-4 px-2 p-xxl-0">
        <h5 className="border-bottom py-2 mb-4">
          <span className="p-2 underLine"> سبد خرید شما </span>
        </h5>
      </section>
      <section className="M-boody container-xxl my-4 px-2 p-xxl-0">
        <div className="row">
          <MainRight />
          <MainLeft />

          <OwlCarouselC autoplay={true} colorSelection={false} />
        </div>
      </section>
    </div>
  );
};

export default Cart;
