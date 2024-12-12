import { NotFoundRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 Not Found",
});
