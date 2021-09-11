import * as React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux";

import ProtectedRoute from "@components/functionals/PrivateRoute";
import HomeScreen from "@pages/home";
import LoginScreen from "@pages/login";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./global.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* Home screen with all authenticated app routes */}
          <ProtectedRoute exact path="/" component={HomeScreen} />
          {/* Public screens */}
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </Router>
      <ToastContainer />
    </Provider>
  );
};

export default App;
