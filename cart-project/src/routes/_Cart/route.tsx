import { createFileRoute, Outlet } from "@tanstack/react-router";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { CartQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { CartTopLayout } from "../../Layouts/Cart/CartTopLayout";
import { CartHeader } from "../../Pages/Cart/CartTop/CartTitleDivider";
import { CartBodyLayout } from "../../Layouts/Cart/CartBodyLayout";
export const Route = createFileRoute("/_Cart")({
  component: () => (
    <Flex className="gap-5 p-12 px-60">
      <CartTopLayout>
        <CartHeader />
        <CartBodyLayout>
          <Outlet />
        </CartBodyLayout>
      </CartTopLayout>
    </Flex>
  ),
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(CartQueryOptions());
  },
});
