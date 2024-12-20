import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { indexRoute } from "./indexRoute";
import { jobsRoute } from "./jobsRoute";
import { settingsRoute } from "./settingsRoute";
import { notFoundRoute } from "./notFoundRoute";
import { dashboardRoute } from "./dashboardRoute";

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  jobsRoute,
  settingsRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
