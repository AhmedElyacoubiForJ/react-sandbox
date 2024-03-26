import "./App.css";
import Accordian from "./freeCodeMapMinis/components/accordian";
import ImageSlider from "./freeCodeMapMinis/components/image-slider";
import RandomColor from "./freeCodeMapMinis/components/random-color";
import StarRating from "./freeCodeMapMinis/components/start-rating";
function App() {
  return (
    <div className="App">
      {/* Build 25 React Mini Projects */}

      {/* Accordian component */}
      {/*  <Accordian /> */}

      {/* Random Color component */}
      {/*  <RandomColor /> */}

      {/* Star Rating component */}
      {/*  <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      <ImageSlider url="https://picsum.photos/v2/list" limit={10}/>
    </div>
  );
}

export default App;
