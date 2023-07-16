/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "./../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "./../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from "../mainPage/ProductCard";

const OwlCarouselC = ({ products }) => {
  return (
    <div>
      <section id="h-most-vistited-section" className="my-4 px-2 p-xxl-0">
        <div className="container-xxl bg-white p-3 rounded-2 shadow-sm">
          <header className="h-owl-header w-100 border-bottom d-flex justify-content-between">
            <h6 className="border-bottom border-2 border-danger p-2 m-0">
              کالاهای مرتبط
            </h6>
            <a href="#" className="text-dark fw-light">
              مشاهده همه
            </a>
          </header>
          <OwlCarousel
            className="owl-theme my-3"
            items={5}
            loop
            margin={20}
            nav
            dots={false}
            dir="ltr"
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 2,
              },
              768: {
                items: 5,
              },
            }}
          >
            {products &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
};

export default OwlCarouselC;
