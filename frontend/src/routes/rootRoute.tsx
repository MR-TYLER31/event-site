import { createRootRoute } from "@tanstack/react-router";
import AppLayout from "../ui/AppLayout";

export const rootRoute = createRootRoute({
  component: AppLayout,
});
