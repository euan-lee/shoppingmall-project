import { ReactNode } from "react";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import Box from "../../ComponentsPrototype/Layout/Box";

export const OrderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="bg-gray-100">
      <Flex className="gap-5 p-12 px-60">{children}</Flex>
    </Box>
  );
};
