import { ProductDetail } from "../../Pages/ProductDetail/ProductDetail";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/Products/$ParamsId")({
  component: ProductDetail,
});
