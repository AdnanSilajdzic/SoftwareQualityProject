import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./views/Search/Search";
import Details from "./views/Details/Details";
import { Provider } from "react-redux";
import { store } from "./state/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: `/tv/:id`,
    element: <Details />,
  },
  {
    path: `/movie/:id`,
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
