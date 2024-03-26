import "./App.css";
import Accordian from "./freeCodeMapMinis/components/accordian";
import ImageSlider from "./freeCodeMapMinis/components/image-slider";
import { LoadMoreData } from "./freeCodeMapMinis/components/load-more-data";
import RandomColor from "./freeCodeMapMinis/components/random-color";
import StarRating from "./freeCodeMapMinis/components/start-rating";
import TreeView from "./freeCodeMapMinis/components/tree-view";
import menus from "./freeCodeMapMinis/components/tree-view/data.js";

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
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit={10}/> */}

      {/* Load more products component */}
      {/*  <LoadMoreData /> */}

      {/* Tree view component / menu UI component / recursive navigation menu */}
      <TreeView menus= {menus} />
    </div>
  );
}

export default App;
