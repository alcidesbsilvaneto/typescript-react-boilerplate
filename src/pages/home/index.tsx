import * as React from "react";
import Sidebar from "@components/ui/Sidebar";
import { Switch } from "react-router";
import ProtectedRoute from "@components/functionals/PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "@redux/index";
import { RootContentContainer } from "./components";

const Home: React.FC = () => {
  return <div>Home</div>;
};

const Other: React.FC = () => {
  return <div>Other</div>;
};

const HomeScreen: React.FC = () => {
  const { isSidebarToggled } = useSelector((state: RootState) => state.appSettings);

  return (
    <div style={{ flex: 1, flexDirection: "row", display: "flex", backgroundColor: "pink" }}>
      <Sidebar />
      <RootContentContainer is_sidebar_toggled={isSidebarToggled}>
        <Switch>
          <ProtectedRoute exact path={"/"} component={Home} />
          <ProtectedRoute exact path={"/other"} component={Other} />
        </Switch>
      </RootContentContainer>
    </div>
  );
};

export default HomeScreen;
