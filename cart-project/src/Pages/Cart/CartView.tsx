import { OrderSummary } from "./OrderSummary";
import { CartItemsList } from "./CartItemsList";
import { CartResetButton } from "./CartResetButton";
import { ToggleAllCheckbox } from "./ToggleAllCheckbox";
import { CartItemSummary } from "./CartItemSummary";
import { CartHeader } from "./CartTitleDivider";
import { CartLeftLayout } from "./CartLeft";
import { CartRightLayout } from "./CartRight";
import { CartTopLayout } from "./CartTop";
import { CartBodyLayout } from "./CartBody";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { CatchBoundary } from "@tanstack/react-router";
export const CartView = () => {
  return (
    <>
      <CartTopLayout>
        <CartHeader />
      </CartTopLayout>
      <CartBodyLayout>
        <CartLeftLayout>
          <CatchBoundary
            getResetKey={() => "reset"}
            onCatch={(error) => console.error(error)}>
            <Flex className="flex flex-row justify-between ">
              <CatchBoundary
                getResetKey={() => "reset"}
                onCatch={(error) => console.error(error)}>
                <ToggleAllCheckbox />
              </CatchBoundary>
              <CartResetButton />
            </Flex>
            <CartItemSummary />
            <CartItemsList />
          </CatchBoundary>
        </CartLeftLayout>
        <CartRightLayout>
          <CatchBoundary
            getResetKey={() => "reset"}
            onCatch={(error) => console.error(error)}>
            <OrderSummary />
          </CatchBoundary>
        </CartRightLayout>
      </CartBodyLayout>
    </>
  );
};
