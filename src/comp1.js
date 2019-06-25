import React, { useContext } from "react";
import ObjectContext from "./ObjectContext";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Comp1() {
  const objectContext = useContext(ObjectContext);
  const addOneItemNewObject = () => {
    const newItem = {};
    newItem[makeid(7)] = { test: 1, test2: { a: "3" } };
    objectContext.setObjectMap({
      ...objectContext.objectMap,
      ...newItem
    });
  };

  const addOneItemMutate = () => {
    objectContext.objectMap[makeid(7)] = { test: 1, test2: { a: "3" } };

    objectContext.setObjectMap(objectContext.objectMap);
  };

  return (
    <React.Fragment>
      <button onClick={addOneItemNewObject}>Add and return new</button>
      <br />
      <button onClick={addOneItemMutate}>Mutate and add</button>
    </React.Fragment>
  );
}
