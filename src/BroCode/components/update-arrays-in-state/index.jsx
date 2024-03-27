import { useState } from "react";

function UpdateArraysExample() {
  const [foods, setFoods] = useState(["pizza", "burger", "fries"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    //setFoods([...foods, newFood])
    // or w. updater function
    //setFoods(foods => [...foods, newFood])
    // or
    setFoods((f) => [...f, newFood]);
  }

  /*  function handleRemoveFood(food) { 
        setFoods(foods.filter(f => f!== food))
    } */

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
      </ul>
    </div>
  );
}
export default UpdateArraysExample;
