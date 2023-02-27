import React from "react";
import { Route, Routes } from "react-router-dom";
import EntryApp from "../screens/EntryApp";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<EntryApp />} />
      {/* <Route path="/" element={}/>
      <Route path="/" element={}/> */}
    </Routes>
  );
}

export default Routing;
