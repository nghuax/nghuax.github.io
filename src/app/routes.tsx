import { createHashRouter } from "react-router";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { PortfolioLayout } from "./components/Layout";

export const router = createHashRouter([
  {
    path: "/",
    Component: PortfolioLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
    ],
  },
]);
