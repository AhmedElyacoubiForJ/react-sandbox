import "./App.css";

import Accordian from "./freeCodeMapMinis/components/accordian";
import ImageSlider from "./freeCodeMapMinis/components/image-slider";
import { LoadMoreData } from "./freeCodeMapMinis/components/load-more-data";
import RandomColor from "./freeCodeMapMinis/components/random-color";
import StarRating from "./freeCodeMapMinis/components/start-rating";
import TreeView from "./freeCodeMapMinis/components/tree-view";
import menus from "./freeCodeMapMinis/components/tree-view/data";
import QRCodeGenarator from "./freeCodeMapMinis/components/qr-code-generator";
import LightDarkMode from "./freeCodeMapMinis/components/light-dark-mode";

import FunctionUpdaterExample from "./BroCode/components/updater-functions";
import UpdateObjectExample from "./BroCode/components/update-objects-in-state";
import UpdateArraysExample from "./BroCode/components/update-arrays-in-state";
import UpdateArrayOfObjects from "./BroCode/components/update-array-of-objects-in-state";
import CardComponentExample from "./BroCode/components/card-components";
import ToDoListExample from "./BroCode/components/to-do-list";
import UseEffectExample from "./BroCode/components/use-effect-hook";
//import DigitalClock from "./BroCode/components/digital-clock";
import UseContextExample from "./BroCode/components/use-context-hook";

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
      {/* <TreeView menus= {menus} /> */}
      
      {/* QR code generator */}
      {/* <QRCodeGenarator /> */}

      {/* light and dark theme switcher */}
      {/* <LightDarkMode /> */}

      {/* ************************************************************ */}

      {/* Bro Code Examples */}

      {/* Functions Updater */}
      {/* <FunctionUpdaterExample /> */}

      {/* Update objects in state */}
      {/* <UpdateObjectExample /> */}

      {/* Update arrays in state */}
      {/* <UpdateArraysExample /> */}

      {/* Update array of objects in state */}
      {/* <UpdateArrayOfObjects /> */}

      {/* Card Components */}
      {/* <CardComponentExample />
          <CardComponentExample />
          <CardComponentExample /> */}
      
      {/* To Do List */}
      {/*  <ToDoListExample /> */}

      {/* useEffect */}
      {/* <UseEffectExample /> */}

      {/* Digital Clock */}
      {/*   <DigitalClock />
        <DigitalClock /> */}
      
      {/* useContext Hook */}
      <UseContextExample />
    </div>
  );
}

export default App;
