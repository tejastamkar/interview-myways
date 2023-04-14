import React from "react";
import Navbar from "./navbar";
import { FoodList } from "./data/foodData";

function FoodListScreen({ foodList }) {
  return (
    <>
      <Navbar />
      <div>
        {foodList.map((data, index) => FoodCard({ data: data, index: index }))}
      </div>
    </>
  );
}

export default FoodListScreen;

function FoodCard({ data, index }) {
  return (
    <div className="FoodCard" key={index}>
      <div>{`${index}. ${data["name"]}`}</div>
      {data["type"]}
      {data["dt"]}
    </div>
  );
}
