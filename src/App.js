import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import Gato from "./components/Gato";
import Home from "./components/Home";
import main from "./components/main.css"
 
function App() {
  return(
    <>
    <Header />
    <Router>
      <hr/>
      <Switch>
        <Route  path="/Gatos/:id" >
          <Gato/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    
     </Router>
    </>
  );
}

export default App;