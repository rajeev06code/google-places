import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/Homepage/Homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import DetailPage from "./pages/detailPage/DetailPage";
import ListingPage from "./pages/listingPage/ListingPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: ":category",
      element: <ListingPage />,
    },
    {
      path: "place/:placeId",
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
