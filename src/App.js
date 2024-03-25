import "./App.css";
import Accordian from "./freeCodeMapMinis/components/accordian";
import RandomColor from "./freeCodeMapMinis/components/random-color";
import StarRating from "./freeCodeMapMinis/components/start-rating";
function App() {
  return (
    <div className="App">

      {/* Accordian component */}
      {/*  <Accordian /> */}

      {/* Random Color component */}
      {/*  <RandomColor /> */}

      {/* Star Rating component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
