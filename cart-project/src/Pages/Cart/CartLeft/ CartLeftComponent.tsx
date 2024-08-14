import { CartLeftLayout } from "../../../Layouts/Cart/CartLeftLayout";
import Flex from "../../../ComponentsPrototype/Layout/Flex";
import { ToggleAllCheckbox } from "./ToggleAllCheckbox";
import { CartResetButton } from "./CartResetButton";
import { CartItemSummary } from "./CartItemSummary";
import { CartItemsList } from "./CartItemsList";

export const CartLeft = () => {
  return (
    <CartLeftLayout>
      <Flex className="flex flex-row justify-between ">
        <ToggleAllCheckbox />
        <CartResetButton />
      </Flex>
      <CartItemSummary />
      <CartItemsList />
    </CartLeftLayout>
  );
};
