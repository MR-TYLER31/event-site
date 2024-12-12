import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { indexRoute } from "./indexRoute";
import { dashboardRoute } from "./dashboardRoute";
import { jobsRoute } from "./jobsRoute";
import { settingsRoute } from "./settingsRoute";
import { notFoundRoute } from "./notFoundRoute";

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
