import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Utils
import checkTokenExpiry from "./utils/checkTokenExpiry";

// Redux store
import store from "./store";

// Components
import Header from "./components/header/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/landing/Landing";
import EventsPage from "./components/eventsPage/EventsPage";
import EventView from "./components/eventView/EventView";
import CreateEvent from "./components/createEvent/CreateEvent";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/createProfile/CreateProfile";
import NotFoundPage from "./components/common/NotFoundPage";
import UnderConstructionPage from "./components/common/UnderConstructionPage";

class App extends Component {
  componentDidMount() {
    checkTokenExpiry();
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/events" component={EventsPage} />
              <Route exact path="/event/:id" component={EventView} />
              <Route exact path="/createEvent" component={CreateEvent} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/createProfile" component={CreateProfile} />
              <Route
                exact
                path="/profile/:id"
                component={UnderConstructionPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
