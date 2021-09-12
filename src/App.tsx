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
import Logout from "@pages/logout";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* Public screens */}
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/logout" component={Logout} />

          {/* Home screen with all authenticated app routes */}
          <ProtectedRoute path="/" component={HomeScreen} />
        </Switch>
      </Router>
      <ToastContainer />
    </Provider>
  );
};

export default App;
