import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    console.log("item Added", id);
  };
  const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product">
      <h2>Buy this:{name}</h2>
      <p>Only for:{price} </p>
      <p>
        <small>Its ID:{id}</small>{" "}
      </p>
      <button onClick={addToCartWithParam}>Add To Cart</button>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Cosmetic;
