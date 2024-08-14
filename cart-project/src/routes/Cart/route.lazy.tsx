import { createLazyFileRoute } from "@tanstack/react-router";
import { Cart } from "../../Pages/Cart/Cart";

export const Route = createLazyFileRoute("/Cart")({
  component: Cart,
  notFoundComponent: () => {
    return <p>cart page doesn't exist!</p>;
  },
});
