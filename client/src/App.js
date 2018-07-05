import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/landing/Landing";
import EventForm from "./components/forms/EventForm";
import EventFeed from "./components/eventFeed/EventFeed";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/feed" component={EventFeed} />
            <Route exact path="/createEvent" component={EventForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
