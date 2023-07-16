import React from "react";

const CompareProductCard = ({
  compareProduct,
  handleDelete,
  addHandler,
  addFav,
  show,
}) => {
  const { id, name, image, price } = compareProduct;
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
    <div className="col-12 col-md-6">
      <section className="D-product-wrapper">
        <div className="row">
          <div className="col-12 col-md-6 D-img-compare">
            <div className="D-img-compare">
              <img src={image} alt={name} />
            </div>
          </div>
          <div className="col-12 pe-3 col-md-6">
            <p className="D-title-Compare fw-bold h5  text-sm-right my-2">
              {name}
            </p>
            <ul className="list-group D-list-compare">
              <li className="list-group-item border-0 p-0">
                <i className="fa fa-shield me-2"></i>
                گارانتی اصالت و سلامت فیزیکی کالا
              </li>
              <li className="list-group-item border-0 text-success p-0">
                <i className="fa fa-check-square-o me-2 text-dark"></i>
                کالا موجود در انبار
              </li>
              <li className="list-group-item border-0 D-add-favorite p-0">
                <i
                  className={
                    show
                      ? "fa fa-heart me-2 text-danger"
                      : "fa fa-heart-o me-2 text-dark"
                  }
                ></i>
                <span onClick={() => addFav(compareProduct)}>
                  {show
                    ? "به علاقه مندی ها اضافه شد"
                    : "افزودن به علاقه مندی ها"}
                </span>
              </li>
            </ul>

            <p className="D-price-compare fw-bold">{commafy(price)} تومان</p>

            <div className="footer-btn d-flex justify-content-center mt-3">
              <button
                className="btn btn-outline-danger"
                onClick={() => addHandler(compareProduct)}
              >
                افزودن به سبد خرید
              </button>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleDelete(id)}
              >
                حذف از مقایسه
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompareProductCard;
