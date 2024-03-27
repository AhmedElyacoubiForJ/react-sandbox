import { useState } from "react";

function UpdateObjectExample() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Toyota",
    model: "Corolla",
  });

  /* function handleYearChange(e) {
        setCar({
           ...car,
            year: e.target.value
        });
    } */
  // with updater function and using previous state
  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }

  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
    /* setCar({
            ...car,
             make: e.target.value
        }) */
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
    /*  setCar({
                ...car,
                 model: e.target.value
            }) */
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}{" "}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={(e) => handleYearChange(e)}
      />
      <br />
      <input
        type="text"
        value={car.make}
        onChange={(e) => handleMakeChange(e)}
      />{" "}
      <br />
      <input
        type="text"
        value={car.model}
        onChange={(e) => handleModelChange(e)}
      />{" "}
      <br />
    </div>
  );
}

export default UpdateObjectExample;
