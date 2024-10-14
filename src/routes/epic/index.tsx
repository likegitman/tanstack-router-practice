import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/epic/")({
  component: EpicComponent,
});

function EpicComponent() {
  const epics = [
    { id: "1", title: "Epic 1" },
    { id: "2", title: "Epic 2" },
    { id: "3", title: "Epic 3" },
  ];

  return (
    <div className="p-3">
      <h3 className="text-red-500">Epics page!</h3>
      <div className="flex flex-col gap-2 p-3">
        {epics.map((epic, idx) => (
          <div key={idx} className="flex gap-3">
            <div>{epic.title}</div>
            <Link to="/epic/$epicId" params={{ epicId: epic.id }}>
              View
            </Link>
            <Link to="/epic/$epicId/edit" params={{ epicId: epic.id }}>
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
