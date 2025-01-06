import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import JobSearch from "../pages/SearchJob";

export const searchJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search-jobs",
  component: JobSearch,
});
