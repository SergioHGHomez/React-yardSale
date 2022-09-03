import React, {useState} from "react";
import "@styles/Product.scss";
import addIcon from '@icons/bt_add_to_cart.svg'

const Product = ({product}) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  }

  return (
    <div className="product">
      {/*  cards  */}
      <div className="product_card">
        <img
          className="Product_img"
          src={product.category.image}
          alt={product.title}
        />
        <div className="Product_info">
          <div className="cards-cantainer_text">
            <p className="Product_price">${product.price}</p>
            <p className="Product_name">{product.title}</p>
          </div>
          <figure onClick={handleClick} className="Product_add">
            <img src={addIcon} alt="add" />
          </figure>
        </div>
      </div>
      {/* end cards */}
    </div>
  );
};

export default Product;
