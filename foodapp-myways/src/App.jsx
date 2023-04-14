import { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./home";
import FoodListScreen from "./footlist";

function App() {
  const [FoodList, setFoodList] = useState([
    { name: "cake", type: "Desserts", dt: 45 },
    { name: "noodle", type: "Fast Food", dt: 20 },
    { name: "Veg Mix", type: "Nutritious", dt: 15 },
  ]);

  useEffect(() => {
    console.log(FoodList)
  }, [FoodList])
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={<Home food={FoodList} addFood={setFoodList} />}
          />
          <Route
            path="/foodlist"
            element={<FoodListScreen foodList={FoodList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
