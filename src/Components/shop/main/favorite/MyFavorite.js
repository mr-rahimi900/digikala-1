import React from "react";
import ContentSideBar from "./ContentSideBar";
import FavoriteLists from "./FavoriteLists";

const MyFavorite = () => {
  return (
    <section className="">
      <section id="main-body-two-col" className="container-xxl body-container">
        <section className="row">
          <ContentSideBar />
          <FavoriteLists />
        </section>
      </section>
    </section>
  );
};

export default MyFavorite;
