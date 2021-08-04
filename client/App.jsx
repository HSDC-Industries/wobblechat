import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewMainAppContainer from './containers/NewMainAppContainer'
import Login from "./Login";
import Signup from "./Signup";
import Answer from "./components/Answer";
import ProtectedRoute from "./ProtectedRoute";
//import MainAppContainer from "./containers/MainAppContainer";
//import "./stylesheets/styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/question/:id" component={Answer} />
      <ProtectedRoute exact={true} path="/">
        <NewMainAppContainer/>
      </ProtectedRoute>
    </Router>
  );
};

export default App;
