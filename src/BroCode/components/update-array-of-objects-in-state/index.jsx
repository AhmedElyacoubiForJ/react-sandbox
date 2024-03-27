import { useState } from "react";

function UpdateArrayOfObjects () {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        // add newCar to cars array
        //setCars([...cars, newCar])
        // set cars using updater function
        setCars(c => [...c, newCar])
        
        // reset car values
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    return (
        <div>
            <p>List of Car Objects</p>
            <ul>
                {  cars && cars.length > 0 ?
                    cars.map((car, index) => (
                        <li key={index}>
                            {car.year} {car.make} {car.model}
                        </li>))
                    : null
                }
                <div>
                    <input
                        type="number"
                        placeholder="Enter car year"
                        value={carYear}
                        onChange={(e)=>setCarYear(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter car make"
                        value={carMake}
                        onChange={(e)=>setCarMake(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter car model"
                        value={carModel}
                        onChange={(e)=>setCarModel(e.target.value)}
                    />
                </div>
                <button onClick={handleAddCar} >Add Car</button>
            </ul>
        </div>
    )
}

export default UpdateArrayOfObjects;