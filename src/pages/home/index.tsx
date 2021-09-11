import * as React from "react";
import Sidebar from "@components/ui/Sidebar";
import { Switch } from "react-router";
import ProtectedRoute from "@components/functionals/PrivateRoute";

const Home: React.FC = () => {
  return <div>Home</div>;
};

const Other: React.FC = () => {
  return <div>Other</div>;
};

const HomeScreen: React.FC = () => {
  return (
    <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
      <Sidebar />
      <div>
        <Switch>
          <ProtectedRoute exact path={"/"} component={Home} />
          <ProtectedRoute exact path={"/other"} component={Other} />
        </Switch>
      </div>
    </div>
  );
};

export default HomeScreen;
