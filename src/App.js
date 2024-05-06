import "./App.css";

// import Accordian from "./freeCodeMapMinis/components/accordian";
// import ImageSlider from "./freeCodeMapMinis/components/image-slider";
// import { LoadMoreData } from "./freeCodeMapMinis/components/load-more-data";
// import RandomColor from "./freeCodeMapMinis/components/random-color";
// import StarRating from "./freeCodeMapMinis/components/start-rating";
// import TreeView from "./freeCodeMapMinis/components/tree-view";
// import menus from "./freeCodeMapMinis/components/tree-view/data";
// import QRCodeGenarator from "./freeCodeMapMinis/components/qr-code-generator";
// import LightDarkMode from "./freeCodeMapMinis/components/light-dark-mode";
// import ScrollIndicator from "./freeCodeMapMinis/components/scroll-indicator";
// import TabsApp from "./freeCodeMapMinis/components/cutom-tabs/tabs-app";
// import ModalTest from "./freeCodeMapMinis/components/custom-modal-popup/modal-test";
// import GithubProfileFinder from "./freeCodeMapMinis/components/githup-profile-finder";
// import SearchAutocomplete from "./freeCodeMapMinis/components/search-autocomplete-with-api";
// import TicTacToe from "./freeCodeMapMinis/components/tic-tac-toe";
// import FeatureFlags from "./freeCodeMapMinis/components/feature-flag";
// import FeatureFlagGlobalState from "./freeCodeMapMinis/components/feature-flag/context";
// import UseFetchHookTest from "./freeCodeMapMinis/components/use-fetch/test";
// import UseOnclickOutsideTest from "./freeCodeMapMinis/components/use-outside-click/test";

// import FunctionUpdaterExample from "./BroCode/components/updater-functions";
// import UpdateObjectExample from "./BroCode/components/update-objects-in-state";
// import UpdateArraysExample from "./BroCode/components/update-arrays-in-state";
// import UpdateArrayOfObjects from "./BroCode/components/update-array-of-objects-in-state";
// import CardComponentExample from "./BroCode/components/card-components";
// import ToDoListExample from "./BroCode/components/to-do-list";
// import UseEffectExample from "./BroCode/components/use-effect-hook";
// import DigitalClock from "./BroCode/components/digital-clock";
// import UseContextExample from "./BroCode/components/use-context-hook";
// import UseRefExample from "./BroCode/components/use-ref";
// import StopWatch from "./BroCode/components/stop-watch";

// import ToDoApp from "./PedroTech/todo-crud";
import ComponetLifecycleExample from "./PedroTech/ComponentLifeCycle";

//import OutletExampleApp from "./code/router-dom-outlet/OutletExampleApp"

//import SimpleUseReducer from "./WebDevSimplified/LearnUseReducer/SimpleUseReducer";
//import ComplexUseReducer from "./WebDevSimplified/LearnUseReducer/ComplexUseReducer";

import { Provider } from "react-redux";
import ReduxTutorial from "./CosdenSolutions/redux-tutorial";
import { store } from "./CosdenSolutions/state/store.ts";

function App() {
  return (
    <div className="App">
      {/* Cosden Solutions */}
     {/*  <Provider store={store}>
        <ReduxTutorial />
      </Provider> */}


      {/* Web Dev Simplified */}
      {/* use reducer Examples */}
      {/* <SimpleUseReducer /> */}
     {/*  <ComplexUseReducer /> */}

      {/* code */}
      {/* <OutletExampleApp /> */}

      {/* Pedro Tech */}
      {/*  <ToDoApp /> */}

      {/* componentLifeCycle */}
      <ComponetLifecycleExample />

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
      {/*  <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100" /> */}

      {/* Custom Tabs */}
      {/* <TabsApp /> */}

      {/* Custom Modal Popup */}
      {/* <ModalTest /> */}

      {/* Githup profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic tac toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag IMplementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Test */}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest/> */}

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
      {/* <UseContextExample /> */}

      {/* useRef */}
      {/* <UseRefExample /> */}

      {/* Stopwatch app */}
      {/* <StopWatch /> */}
    </div>
  );
}

export default App;
