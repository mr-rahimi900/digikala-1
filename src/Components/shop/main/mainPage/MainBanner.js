/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";

const MainBanner = () => {
  return (
    <div>
      <section
        id="h-main-banner-section"
        className="container-xxl px-2 p-xxl-0"
      >
        <div className="row g-2">
          <div className="col-md-8">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-2"
                    src="images/slideshow/1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-2"
                    src="images/slideshow/2.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-2"
                    src="images/slideshow/3.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-1">
              <a href="#">
                <img
                  src="images/slideshow/12.gif"
                  alt=""
                  className="img-fluid rounded-1"
                />
              </a>
            </div>
            <div className="">
              <a href="#">
                <img
                  src="images/slideshow/11.jpg"
                  alt=""
                  className="img-fluid rounded-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBanner;
