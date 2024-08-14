import { useState } from "react";
import { useCartItemsToggleMutation } from "../../../Hooks/MutateCartItem/CartMutation";
import CheckBox from "../../../ComponentsPrototype/CheckBox/CheckBox";

export const ToggleAllCheckbox = () => {
  const [reset, setReset] = useState(false);
  const [CartItemsToggleMutation] = useCartItemsToggleMutation();

  return (
    <CheckBox
      flag={reset}
      handleChange={() => {
        CartItemsToggleMutation.mutate(!reset);
        setReset(!reset);
      }}
    />
  );
};
