import { createLazyFileRoute } from "@tanstack/react-router";
import { Cart } from "../../../Pages/Cart/Cart";

export const Route = createLazyFileRoute("/_Cart/Cart")({
  component: () => <Cart />,
});
