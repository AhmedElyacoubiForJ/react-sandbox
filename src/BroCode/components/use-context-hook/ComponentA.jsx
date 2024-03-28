import { useState, createContext } from "react";
import "./styles.css";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Yacoubi");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
      {/* <ComponentB user={user}/> */}
    </div>
  );
}

export default ComponentA;
