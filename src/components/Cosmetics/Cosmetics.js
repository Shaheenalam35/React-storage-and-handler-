import React from "react";
import { add } from "../../utilities/calculate";

const Cosmetics = () => {
  const first = 15;
  const second = 45;
  const total = add(first, second);

  return (
    <div>
      <h1>Welcome to my Cosmetics World</h1>
      <p>total: {total}</p>
    </div>
  );
};

export default Cosmetics;
