import { Flex, Text } from "@mantine/core";

import { ENV_CLIENT } from "@/env/client";

import { AdministratorAvaterContainer } from "@/model/administrator/components/avater/container";

export const Header = () => {
  return (
    <Flex justify="space-between" align="center" py="xs" px="md">
      <Text fw="bold">{ENV_CLIENT.NEXT_PUBLIC_APP_TITLE}</Text>
      <AdministratorAvaterContainer />
    </Flex>
  );
};
