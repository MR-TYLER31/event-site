import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Settings from "../pages/Settings";

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: Settings,
});
