import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { ProductDetail } from "../../Pages/ProductDetail/ProductDetail";
export const Route = createFileRoute("/Products/$ParamsId")({
  component: ProductDetail,
  loader: ({ context: { queryClient }, params: { ParamsId } }) => {
    return queryClient.ensureQueryData(ProductDetailQueryOptions(ParamsId));
  },
});
