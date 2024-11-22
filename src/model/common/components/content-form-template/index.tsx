import { Box, Flex, Stack } from "@mantine/core";
import type { FC, PropsWithChildren, ReactNode } from "react";

type Props = {
  renderHeader: () => ReactNode;
  renderFooter: () => ReactNode;
};

export const ContentFormTemplate: FC<PropsWithChildren<Props>> = ({
  children,
  renderHeader,
  renderFooter,
}) => {
  return (
    <Flex
      component="form"
      direction="column"
      // 単にborder-lでは上手くいかなかった
      className="h-[calc(100vh-60px)] border border-gray-4 border-t-0 border-r-0 border-b-0 border-solid"
    >
      <Box className="grow overflow-y-scroll scroll-smooth">
        {renderHeader()}
        <Stack gap="lg" px="lg" py="lg">
          {children}
        </Stack>
      </Box>
      {renderFooter()}
    </Flex>
  );
};
