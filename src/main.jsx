import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Bags from "./routes/Bags.jsx";
// import Home from "./routes/Home.jsx";
import Student from "./component/Student.jsx";
import Display from "./component/Display.jsx";
import App from "./routes/App.jsx";
import Login from "./routes/Login.jsx";
import Registration from "./routes/Registration.jsx";
import ForgotPassword from "./routes/ForgotPassword.jsx";
// import myntraStore from "./store/index.js";
// import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/Login", element: <Login/> },
      { path: "/Registration", element: <Registration/> },
      { path: "/ForgotPassword", element: <ForgotPassword/> },
      { path: "/Student", element: <Student />  },
      { path: "/Display", element: <Display />  },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  
  </StrictMode>
);