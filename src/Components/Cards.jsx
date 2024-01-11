import React, { useState } from "react";
import Card from "./Card";
import FoodData from "../FoodData";

const Cards = () => {
  //   const [data, setData] = useState(FoodData);
  //   console.log(data)

  //   console.log(FoodData);

  return (
    <div className="flex justify-center gap-10 items-center m-auto flex-wrap w-screen px-10">
      {FoodData.map((e) => (
        <Card
          desc={e.desc}
          key={e.id}
          id={e.id}
          title={e.name}
          rating={e.rating}
          price={e.price}
          image={e.img}
        />
      ))}
    </div>
  );
};

export default Cards;
