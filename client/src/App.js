import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Utils
import checkTokenExpiry from "./utils/checkTokenExpiry";

// Redux store
import store from "./store";

// Components
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/landing/Landing";
import EventForm from "./components/forms/EventForm";
import EventsPage from "./components/eventsPage/EventsPage";

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
              <Route exact path="/createEvent" component={EventForm} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
