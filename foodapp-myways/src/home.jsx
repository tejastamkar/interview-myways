import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./home.css";
import Dropdown from "react-bootstrap/Dropdown";
// import {} from "react-router-dom";
import FoodListScreen from "./footlist";
function Home({ addFood, food }) {
  // Delicious Food, Nutritious Food, Fast Food, Beverages, and Desserts,
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Select Food Type");
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  //   const history = useHistory();

  function addList() {
    var item = {
      name: name,
      type: type,
      dt: time,
    };

    addFood([...food, item]);
  }

  return open ? (
    <FoodListScreen foodList={food} setOpen={setOpen} />
  ) : (
    <div>
      {/* <Navbar /> */}
      <div className="Form-Input">
        <Form.Label htmlFor="foodName">Food Name</Form.Label>
        <Form.Control
          //   type=""
          onChange={(e) => setName(e.target.value)}
          id="foodName"
        />

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {type}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setType("Delicious Food")}>
              Delicious Food
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setType("Nutritious Food")}>
              Nutritious Food
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setType("Fast Food")}>
              Fast Food
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setType("Beverages")}>
              Beverages
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setType("Desserts")}>
              Desserts
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Label htmlFor="timetaken">Time</Form.Label>
        <Form.Control
          size="2"
          onChange={(e) => setTime(e.target.value)}
          id="timetaken"
          aria-describedby="timehelpBlock"
        />
        <Form.Text id="timehelpBlock" muted>
          Enter a number which will be taken as minutes for food
        </Form.Text>
        <div className="SendBtn">
          <Button variant="outline-primary" onClick={addList}>
            Add The Item
          </Button>
        </div>

        <br />

        <div className="SendBtn">
          <Button variant="outline-primary" onClick={() => setOpen(true)}>
            FoodList
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
