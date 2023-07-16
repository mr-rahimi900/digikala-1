import React, { useEffect, useState } from "react";
import { useGloballContext } from "../../../../Contexts/context";
import Product from "./Product";

const MainRight = ({ counterPlus, counterMines }) => {
  const { cartItems } = useGloballContext();

  return (
    <div className="col-sm-12 col-xl-9">
      <section className="p-3 border rounded bg-white shadow">
        {cartItems &&
          cartItems.map((cartItem) => {
            return (
              <Product
                key={cartItem.id}
                cartItem={cartItem}
                counterPlus={counterPlus}
                counterMines={counterMines}
              />
            );
          })}
      </section>
    </div>
  );
};

export default MainRight;
