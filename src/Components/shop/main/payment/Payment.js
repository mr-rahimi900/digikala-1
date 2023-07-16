import React from "react";
import Discount from "./Discount";
import SelectPayment from "./SelectPayment";
import TotalPrice from "./TotalPrice";

const Payment = () => {
  return (
    <main>
      <section className="container-xxl my-4 px-2 p-xxl-0">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center D-header-payment mt-4">
            <h2 className="h6 fw-bold">انتخاب نوع پرداخت</h2>
          </div>

          <div className="col-12 col-md-9 mb-md-5">
            <Discount />
            <SelectPayment />
          </div>

          <div className="col-12 col-md-3">
            <TotalPrice />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
