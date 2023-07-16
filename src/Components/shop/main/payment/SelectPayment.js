import React from "react";

const SelectPayment = () => {
  return (
    <section className="D-paymentBox bg-white p-3 rounded-2 mt-3">
      <h2 className="pb-2 fw-bolder">انتخاب نوع پرداخت</h2>
      <div className="D-alert pt-2">
        <div className="alert alert-primary text-primary">
          <i className="fa fa-info-circle me-1"></i>
          برای پیشگیری از انتقال ویروس کرونا پیشنهاد می کنیم روش پرداخت اینترنتی
          رو انتخاب کنید.
        </div>
      </div>
      <section className="D-payment-select">
        <div className="D-card-selct p-2 rounded-2 mb-3 col-12 col-md-4">
          <div className="mb-3 h6">
            <i className="fa fa-credit-card me-2"></i>
            پرداخت آنلاین
          </div>

          <div className=" mb-2 h6">
            <i className="fa fa-calendar me-2"></i>
            درگاه پرداخت زرین پال
          </div>
        </div>

        <div className="D-card-selct p-2 rounded-2 mb-3 col-12 col-md-4">
          <div className="mb-3 h6">
            <i className="fa fa-id-card me-2"></i>
            پرداخت آفلاین
          </div>

          <div className=" mb-2 h6">
            <i className="fa fa-calendar me-2"></i>
            حداکثر در 2 روز کاری بررسی می شود
          </div>
        </div>

        <div className="D-card-selct p-2 rounded-2 mb-3 col-12 col-md-4">
          <div className="mb-3 h6">
            <i className="fa fa-money me-2"></i>
            پرداخت درب محل
          </div>

          <div className="mb-2 h6">
            <i className="fa fa-calendar me-2"></i>
            پرداخت به پیک هنگام دریافت کالا
          </div>
        </div>
      </section>
    </section>
  );
};

export default SelectPayment;
