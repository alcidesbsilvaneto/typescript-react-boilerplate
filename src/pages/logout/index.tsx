import * as React from "react";

const Logout: React.FC = () => {
  React.useEffect(() => {
    localStorage.clear();
    window.location.href = "/login";
  }, []);
  return <div></div>;
};

export default Logout;
