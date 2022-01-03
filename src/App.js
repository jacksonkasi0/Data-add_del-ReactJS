import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
