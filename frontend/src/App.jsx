import React from "react";
import "./features/shared/global.scss";
import FaceExpression from "./features/expression/component/Faceexpression";
import { AuthProider } from "./features/auth/Auth.context";
import { RouterProvider } from "react-router";
import { router } from "./features/app.routes";
const App = () => {
  return (
    <div>
      <AuthProider>
        <RouterProvider router={router} />
      </AuthProider>
    </div>
  );
};

export default App;
