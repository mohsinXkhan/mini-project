import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Page2 from "pages/Todo";
import Home1 from "pages/Home";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "todo",
      element: <Page2 />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
