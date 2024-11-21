import { Box, Button, Flex, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { FC, FormEventHandler, PropsWithChildren } from "react";

export const SearchFormWrapper: FC<
  PropsWithChildren<{
    onSubmit: FormEventHandler<HTMLFormElement>;
  }>
> = ({ children, onSubmit }) => {
  return (
    <Box className="rounded border-gray-4 border-solid" pt={12} px={24}>
      <form onSubmit={onSubmit}>
        <Text c="gray" pb={4} size="sm">
          検索条件一覧
        </Text>

        {children}

        <Flex justify="end" gap="xs" pb="sm" mt="md">
          <Button type="submit" leftSection={<IconSearch size={14} />}>
            検索
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
