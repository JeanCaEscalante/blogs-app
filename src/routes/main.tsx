import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import Index from "../pages/Index";
import Travel from "../pages/Travel";
import Food from "../pages/Food";
import Article from "../components/Article";
import TravelList from "../pages/TravelList";
import FoodList from "../pages/FoodList";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <GuestLayout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "travel",
          element: <Travel />,
          children: [
            {
              index: true,
              element: <TravelList />,
            },
            {
              path: ":articleId",
              element: <Article />,
            },
          ]
        },
        {
          path: "food",
          element: <Food />,
          children: [
            {
              index: true,
              element: <FoodList />,
            },
            {
              path: ":articleId",
              element: <Article />,
            },
          ]
          
        }
      ],
    },
  ], { basename: "/blogs-app" });

  export default Router;