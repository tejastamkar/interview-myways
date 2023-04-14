import React from "react";
import Navbar from "./navbar";
import Button from "react-bootstrap/Button";
function FoodListScreen({ foodList, setOpen }) {
  return (
    <>
      <div>
        {foodList.map((data, index) => FoodCard({ data: data, index: index }))}
      </div>
      <Button variant="outline-primary" onClick={() => setOpen(false)}>
        Add
      </Button>
    </>
  );
}

export default FoodListScreen;

function FoodCard({ data, index }) {
  return (
    <div className="FoodCard" key={index}>
      <div>{`${index}. ${data["name"]}`}</div>
      {`Type: ${data["type"]}   , Time: ${data["dt"]}m`}
    </div>
  );
}
