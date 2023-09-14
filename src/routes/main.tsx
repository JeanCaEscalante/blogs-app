import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Index from "../pages/Index";
import Travel from "../pages/Travel";
import Food from "../pages/Food";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "travel",
          element: <Travel />,
        },
        {
          path: "food",
          element: <Food />,
        },
      ],
    },
  ]);

  export default Router;