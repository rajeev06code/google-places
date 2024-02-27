import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage/Homepage";
import DetailPage from "./components/detailPage/DetailPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: ":category",
      element: <DetailPage />,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
