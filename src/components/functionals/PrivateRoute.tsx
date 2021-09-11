import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export default class ProtectedRoute extends Route<RouteProps> {
  public render() {
    let redirectPath: string = "";
    if (!localStorage.getItem("user_token")) {
      redirectPath = "/login";
    } else {
      redirectPath = "";
    }

    if (redirectPath) {
      const renderComponent = () => (
        <Redirect to={{ pathname: redirectPath }} />
      );
      return (
        <Route {...this.props} component={renderComponent} render={undefined} />
      );
    } else {
      return <Route {...this.props} />;
    }
  }
}
