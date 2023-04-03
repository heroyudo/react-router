import React from "react";
import Home from "./views/Home";
import { Route } from "react-router-dom";
// npm uninstall react-router-dom@5.1.2
import About from "./views/About";



const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </div>
  )
}




export default App;
