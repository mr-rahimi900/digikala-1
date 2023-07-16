import React from "react";
import { useGloballContext } from "../../../../Contexts/context";
import FavoriteProduct from "./FavoriteProduct";

const FavoriteLists = () => {
  const { favorites, setFavorites } = useGloballContext();
  return (
    <main id="main-body" className="main-body col-md-9">
      <section className="content-wrapper bg-white p-3 rounded-2 mb-2">
        <section className="content-header mb-4">
          <section className="d-flex justify-content-between align-items-center">
            <h2 className="content-header-title">
              <span>لیست علاقه های من</span>
            </h2>
            <section className="content-header-link"></section>
          </section>
        </section>

        
          {favorites &&
            favorites.map((fav) => {
              return <FavoriteProduct key={fav.id} fav={fav} />;
            })}


      </section>
    </main>
  );
};

export default FavoriteLists;
