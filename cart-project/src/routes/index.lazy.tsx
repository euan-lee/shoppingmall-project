import { createLazyFileRoute } from "@tanstack/react-router";
import { Products } from "../Pages/Products/Products";

export const Route = createLazyFileRoute("/")({
  component: Products,
});
