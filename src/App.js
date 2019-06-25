import React, { useState } from "react";
import './App.css';

import CompList from "./compList";
import Comp2 from "./comp2";
import ObjectMapContext from "./ObjectContext";
import AnotherComponent from './AnotherComponent';

function App() {
  const [objectMap, setObjectMap] = useState({});
  return (
      <div className="App">
        <ObjectMapContext.Provider value={{ objectMap, setObjectMap }}>
          <CompList />
        </ObjectMapContext.Provider>
        <br />
        <AnotherComponent test="test" color="red"/>
        <AnotherComponent test="test" color="blue"/>
        <AnotherComponent test="test" color="green"/>
        <AnotherComponent test="test" color="pink"/>
        <br />
        <br />
        <br />
        <Comp2 objectMap={objectMap} />
      </div>
  );
}


export default App;
