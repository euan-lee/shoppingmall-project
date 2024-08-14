import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailQueryOptions } from "../../Api/QueryOptions/QueryOptions";

export const Route = createFileRoute("/Products/$ParamsId")({
  loader: ({ context: { queryClient }, params: { ParamsId } }) => {
    return queryClient.ensureQueryData(ProductDetailQueryOptions(ParamsId));
  },
});
