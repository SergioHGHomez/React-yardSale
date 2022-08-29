import React from "react";
import '@styles/ProductList.scss';
import Product from "@components/Product";

const ProductList = () => {
  return (
  <section className="ProductList">
      <div className="cards-container">
        <Product />
      </div>
  </section>
  );
};

export default ProductList;
