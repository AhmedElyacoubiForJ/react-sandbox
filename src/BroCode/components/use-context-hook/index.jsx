// useContext() = React Hook that allows you shares values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from'react';
// 2. create context: export const UserContext = createContext();
// 3. <UserContext.Provider value={user}>
//      <ChildComponent />
//    </UserContext.Provider>

// CONSUMER COMPONENTS
// 1. import { useContext } from 'react';
//    import UserContext from './UserContext';
// 2. const value = useContext(UserContext);

import ComponentA from "./ComponentA";
function UseContextExample() {
  return (
    <>
      <ComponentA />
    </>
  );
}

export default UseContextExample;
