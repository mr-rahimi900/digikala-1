import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Error404 = () => {
  return (
    <div className="container-fluid">
      <Link to="/">
        <div className=" justify-content-center  d-flex flex-column">
          <Image
            className="img-fluid  d-none d-lg-block"
            alt="..."
            srcSet="./images/error404/2400.png"
          />
          <Image
            className="img-fluid  d-none d-md-block d-lg-none "
            alt="..."
            srcSet="./images/error404/600.png"
          />
          <Image
            className="img-fluid  d-md-none"
            alt="..."
            srcSet="./images/error404/400.png"
          />
        </div>
      </Link>
    </div>
  );
};

export default Error404;
