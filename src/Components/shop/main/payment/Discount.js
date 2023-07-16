import React from "react";

const Discount = () => {
  return (
    <section className="D-paymentBox bg-white p-3 rounded-2 mt-3">
      <h2 className="pb-2">کد تخفیف</h2>
      <div className="D-alert pt-2">
        <div className="alert alert-primary text-primary">
          <i className="fa fa-info-circle me-1"></i>
          کد تخفیف خود را در این بخش وارد کنید
        </div>
      </div>
      <div className="input-group mb-3 D-discountCode">
        <input
          type="text"
          className="form-control p-1"
          placeholder="کد تخفیف خود را وارد کنید"
        />
        <button className=" btn btn-primary input-group-text text-white">
          اعمال کد
        </button>
      </div>
    </section>
  );
};

export default Discount;
