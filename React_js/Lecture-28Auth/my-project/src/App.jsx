import React from "react";
import Layout from "./Pages/Layout";
import { AuthContext } from "./Utils/Auth";

const App = () => {
  return (
    <div>
      {/* <AuthContext> */}
        <Layout />
      {/* </AuthContext> */}
    </div>
  );
};

export default App;
