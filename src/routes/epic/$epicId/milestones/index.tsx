import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MilestoneSearch } from "../../../../app/MilestoneSearch";

type SearchParams = {
  page: number;
  search: string;
  tags: string[];
};

export const Route = createFileRoute("/epic/$epicId/milestones/")({
  validateSearch(search: Record<string, unknown>): SearchParams {
    return {
      page: Number(search.page ?? "1") ?? 1,
      search: (search.search as string) || "",
      tags: Array.isArray(search.tags) ? search.tags : [],
    };
  },
  component: ({}) => {
    const { epicId } = Route.useParams();
    const { page, search, tags } = Route.useSearch();
    const navigate = useNavigate({ from: "/epic/$epicId/milestones" });

    const pageDown = () => {
      navigate({
        to: ".",
        search: (prev) => {
          return { ...prev, page: prev.page - 1 };
        },
      });
    };

    const pageUp = () => {
      navigate({
        to: ".",
        search: (prev) => {
          return { ...prev, page: prev.page + 1 };
        },
      });
    };

    return (
      <div className="flex flex-col gap-3 p-3">
        <div>Epic: {epicId}</div>
        <div></div>
        <pre>{JSON.stringify({ page, search, tags })}</pre>
        <div>Search values in current </div>
        <div className="flex gap-2">
          <button
            disabled={page == 1}
            className="border p-2"
            onClick={pageDown}
          >
            Page Down
          </button>
          <button className="border p-2" onClick={pageUp}>
            Page Up
          </button>
        </div>
      </div>
    );
  },
});
