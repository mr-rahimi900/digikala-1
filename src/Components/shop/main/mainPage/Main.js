/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import OwlCarouselC from "./OwlCarouselC";
import MainBanner from "./MainBanner";
import OwlCarouselBrands from "./OwlCarouselBrands";
import { useGloballContext } from "../../../../Contexts/context";

const Main = () => {
  const { brands, suggestedProducts , mostVisitedProducts } =
    useGloballContext();

  return (
    <>
      <MainBanner />
      <OwlCarouselC
        title="پربازدیدترین کالاها"
        seeAll={true}
        products={mostVisitedProducts}
        colorSelection={false}
        autoPlay={true}
      />
      <section
        id="h-second-banner-section"
        className="container-xxl my-4 px-2 p-xxl-0"
      >
        <div className="row g-2">
          <div className="col-md-6 my-2 my-md-0">
            <a href="#">
              <img
                src="images/ads/two-col-1.jpg"
                alt=""
                className="img-fluid rounded-2"
              />
            </a>
          </div>
          <div className="col-md-6 my-2 my-md-0">
            <a href="#">
              <img
                src="images/ads/two-col-2.jpg"
                alt=""
                className="img-fluid rounded-2"
              />
            </a>
          </div>
        </div>
      </section>
      <OwlCarouselC
        title="پیشنهاد آمازون به شما"
        products={suggestedProducts}
        seeAll={false}
        colorSelection={false}
        autoPlay={true}
      />
      <section
        id="h-third-banner-section"
        className="container-xxl my-4 px-2 p-xxl-0"
      >
        <div className="row g-0">
          <div className="col">
            <a href="#">
              <img
                src="images/ads/one-col-1.jpg"
                alt=""
                className="img-fluid rounded-2"
              />
            </a>
          </div>
        </div>
      </section>
      <OwlCarouselBrands
        title="برندهای ویژه"
        seeAll={false}
        brands={brands}
        autoPlay={true}
      />
    </>
  );
};

export default Main;
