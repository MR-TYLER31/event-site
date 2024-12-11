import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import Jobs from "../pages/Jobs";

export const jobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jobs",
  component: Jobs,
});
