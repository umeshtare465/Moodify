import React from "react";
import "./features/shared/global.scss";
import FaceExpression from "./features/expression/component/Faceexpression";
import { AuthProvider } from "./features/auth/Auth.context";
import { SongContextProvider } from "./features/expression/home/song.context";
import { RouterProvider } from "react-router";
import { router } from "./features/app.routes";
const App = () => {
  return (
    <div>
      <AuthProvider>
        <SongContextProvider>
          <RouterProvider router={router} />
        </SongContextProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
