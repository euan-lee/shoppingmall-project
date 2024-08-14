import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_Orders/Orders")({
  notFoundComponent: () => {
    return <p>order page doesn't exist!</p>;
  },
});
