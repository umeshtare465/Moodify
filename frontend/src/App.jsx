import React from "react";
import "./features/shared/global.scss";
import FaceExpression from "./features/expression/component/Faceexpression";
import { AuthProvider } from "./features/auth/Auth.context";
import { RouterProvider } from "react-router";
import { router } from "./features/app.routes";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
