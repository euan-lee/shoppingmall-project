import { createFileRoute } from "@tanstack/react-router";
import { getCarts } from "../../Api/Api";
import { queryOptions } from "@tanstack/react-query";

export const CartQueryOptions = () =>
  queryOptions({
    queryKey: ["Cart"],
    queryFn: () => getCarts(),
  });

export const Route = createFileRoute("/Cart")({
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(CartQueryOptions());
  },
});
