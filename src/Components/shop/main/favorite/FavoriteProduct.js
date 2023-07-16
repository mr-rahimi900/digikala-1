import React, { useEffect } from "react";
import { useGloballContext } from "../../../../Contexts/context";

const FavoriteProduct = ({ fav }) => {
  const { favorites, setFavorites } = useGloballContext();
  const { id, name, image, price } = fav;

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

  const handleDelete = (productId) => {
    setFavorites(favorites.filter((element) => element.id !== productId));
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <section className="cart-item d-flex py-3">
        <section className="cart-img align-self-start flex-shrink-1">
          <img src={image} alt={name} />
        </section>
        <section className="align-self-start w-100">
          <p className="fw-bold">{name}</p>
          <p>
            <i className="fa fa-shield-alt cart-product-selected-warranty me-1"></i>{" "}
            <span> گارانتی اصالت و سلامت فیزیکی کالا</span>
          </p>
          <p>
            <i className="fa fa-store-alt cart-product-selected-store me-1"></i>{" "}
            <span className="text-success">کالا موجود در انبار</span>
          </p>
          <section className="mt-5 delete-text-favorite">
            <a
              className="text-decoration-none cart-delete"
              onClick={() => handleDelete(id)}
            >
              <i className="fa fa-trash"></i> حذف از لیست علاقه ها
            </a>
          </section>
        </section>
        <section className="align-self-end flex-shrink-1">
          <section className="text-nowrap fw-bold">{commafy(price)} تومان</section>
        </section>
      </section>
    </>
  );
};

export default FavoriteProduct;
