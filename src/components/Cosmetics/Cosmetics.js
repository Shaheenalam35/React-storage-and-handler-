import React, { useEffect, useState } from "react";
import { add } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  // Data generate from json generator....................................
  //   const cosmetics = [
  //     {
  //       id: "623818dc3701beeba24aaa11",
  //       price: 263,
  //       name: "Janine Holt",
  //     },
  //     {
  //       id: "623818dcc34f752d4ab65091",
  //       price: 187,
  //       name: "Cora Evans",
  //     },
  //     {
  //       id: "623818dc47f284d7a2d0b1c2",
  //       price: 95,
  //       name: "Taylor Shepherd",
  //     },
  //     {
  //       id: "623818dc5e206c1e06e326c8",
  //       price: 51,
  //       name: "Hodges Mccoy",
  //     },
  //     {
  //       id: "623818dc8ca4d43355ee0f2a",
  //       price: 135,
  //       name: "Charity Lott",
  //     },
  //   ];

  // Data create by own....................................
  //   const cosmetics = [
  //     { id: 1, name: "Polish", price: 150 },
  //     { id: 2, name: "Eye-Brow", price: 300 },
  //     { id: 3, name: "Lip Stick", price: 500 },
  //     { id: 4, name: "Body Lotion", price: 100 },
  //     { id: 5, name: "Shower Gel", price: 190 },
  //   ];

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
