import { createLazyFileRoute } from "@tanstack/react-router";
import { Orders } from "../../../Pages/Orders/Orders";

export const Route = createLazyFileRoute("/_Orders/Orders")({
  component: Orders,
  notFoundComponent: () => {
    return <p>order page doesn't exist!</p>;
  },
});
