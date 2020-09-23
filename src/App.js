import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from "./Component Staff/Edit";
import View from "./Component Staff/View";
import Add from './Component Staff/Add';
import FireDB from "./Firebase";
import Test from "./Component Staff/Test";
function App() {






  return (
    <Router>
          <div className="container">
             
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Employee Manager</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>

   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={"/add"} className="nav-link">Add</Link>
      </li>
      <li className="nav-item">
        <Link to={"/view"} className="nav-link">view</Link>
      </li>
      <li  className="nav-item">
        <Link  className="nav-link">Edit</Link>
      </li>

    </ul>
 
     </div>
   </nav>
   <br />
   <Test />
   <br />
         <br />
   <Switch>
     <Route exact path="/add" component={Add} ></Route>
     <Route  path="/edit" component={Edit} ></Route>
     <Route  path="/view" component={View} ></Route>
   </Switch>

 </div>
  

    </Router>
  );
}

export default App;
