import React from "react";
import { add } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const cosmetics = [
    { id: 1, name: "Polish", price: 150 },
    { id: 2, name: "Eye-Brow", price: 300 },
    { id: 3, name: "Lip Stick", price: 500 },
    { id: 4, name: "Body Lotion", price: 100 },
    { id: 5, name: "Shower Gel", price: 190 },
  ];

  return (
    <div>
      <h1>Welcome to my Cosmetics World</h1>

      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
