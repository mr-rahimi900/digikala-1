import React from "react";
import GalleryProduct from "./GalleryProduct";
import InfoProduct from "./InfoProduct";
import AddProduct from "./AddProduct";
import ProductSpecifications from "./ProductSpecifications";
import OwlCarouselC from "./../mainPage/OwlCarouselC";
import { useParams } from "react-router-dom";
import { productsId } from "../../../products/productsData";
import { useGloballContext } from "../../../../Contexts/context";

const Product = () => {
  const { productsData } = useGloballContext();
  const myparams = useParams();
  const uniqProduct = productsId(parseInt(myparams.productId));
  // const uniqProuctTwo = findSuggested(parseInt(myparams.productId));


  return (
    <section className="container mt-4">
      <header className="border-bottom">
        <h6>
          <span className="R-tittle fw-bold">
            {uniqProduct && uniqProduct.name}
          </span>
        </h6>
      </header>

      <div className="row gx-4 gy-2 mt-3">
        <GalleryProduct uniqProduct={uniqProduct} />
        <InfoProduct uniqProduct={uniqProduct} />
        <AddProduct uniqProduct={uniqProduct} />
        <OwlCarouselC
          title="کالاهای مرتبط"
          seeAll={true}
          products={productsData}
          colorSelection={false}
          autoPlay={true}

        />
        <ProductSpecifications />
      </div>
    </section>
  );
};

export default Product;
