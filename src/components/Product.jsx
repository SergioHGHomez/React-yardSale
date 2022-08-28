import React from "react";
import "../styles/Product.scss";
import addIcon from '@icons/bt_add_to_cart.svg'

const Product = () => {
  return (
      <>
        {/*  cards  */}
        <div className="Product_card">
          <img
            className="Product_img"
            src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="camera"
          />
          <div className="Product_info">
            <div className="cards-cantainer_text">
              <p className="Product_price">$2,599</p>
              <p className="Product_name">sony a7 III</p>
            </div>
            <figure className="Product_add">
              <img src={addIcon} alt="add" />
            </figure>
          </div>
        </div>
        {/* end cards */}
      </>

  );
};

export default Product;
