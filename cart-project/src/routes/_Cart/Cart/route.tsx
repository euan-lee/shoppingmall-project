import { createFileRoute } from "@tanstack/react-router";
import { CartQueryOptions } from "../../../Api/QueryOptions/QueryOptions";

export const Route = createFileRoute("/_Cart/Cart")({
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(CartQueryOptions());
  },
});
