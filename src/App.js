import React, { useState } from "react";
import './App.css';

import Comp1 from "./comp1";
import Comp2 from "./comp2";
import ObjectMapContext from "./ObjectContext";
import AnotherComponent from './AnotherComponent';

function App() {
  const [objectMap, setObjectMap] = useState({});
  const [test, setTest] = useState('test');
  return (
    <ObjectMapContext.Provider value={{ objectMap, setObjectMap }}>
      <div className="App">
        <Comp1 />
        <br />
        <AnotherComponent test={test} color="red"/>
        <AnotherComponent test={test} color="blue"/>
        <AnotherComponent test={test} color="green"/>
        <AnotherComponent test={test} color="pink"/>
        <br />
        <br />
        <br />
        <Comp2 objectMap={objectMap} />
      </div>
    </ObjectMapContext.Provider>
  );
}


export default App;
