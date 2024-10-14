import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/epic")({
  component: () => (
    <div className="p-3">
      Epics layout <Outlet />
    </div>
  ),
});
