import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewMainAppContainer from './containers/NewMainAppContainer'
import Login from "./Login";
import Signup from "./Signup";
import Answer from "./components/Answer";
import ProtectedRoute from "./ProtectedRoute";
import SearchResults from "./components/SearchResults";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/question/:id" component={Answer} />
      <Route path="/searchResults" component={SearchResults} />
      <Route path="/chat" component={Chat} />
      <ProtectedRoute exact={true} path="/">
        <NewMainAppContainer/>
      </ProtectedRoute>
    </Router>
  );
};

export default App;
