import { useState } from "react";
import "./styles.css";

function UpdateArrayOfObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    // add newCar to cars array
    //setCars([...cars, newCar])
    // set cars using updater function
    setCars(c => [...c, newCar]);

    // reset car values in states i.e. in the ui forms
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(c => c.filter((_, i) => i !== index));
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }

  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars && cars.length > 0
          ? cars.map((car, index) => (
              <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
              </li>
            ))
          : null}
      </ul>
      <input
        type="number"
        placeholder="Enter car year"
        value={carYear}
        onChange={(e) => handleYearChange(e)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Enter car make"
        value={carMake}
        onChange={(e) => handleMakeChange(e)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Enter car model"
        value={carModel}
        onChange={(e) => handleModelChange(e)}
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default UpdateArrayOfObjects;
