import { Box, Button, Flex, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import type { FC } from "react";

import { CollapsedSearchBox } from "@/model/common/components/collapsed-search-box";

import { ProfileCardListSearchFreeWordInput } from "./inputs/free-word";
import { ProfileCardListSearchLuckyNumberInput } from "./inputs/lucky-number";

export const ProfileCardListSearchForm: FC = () => {
  return (
    <Box className="rounded border-gray-4 border-solid" pt={12} px={24}>
      <form>
        <Text c="gray" pb={4} size="sm">
          検索条件一覧
        </Text>

        <ProfileCardListSearchFreeWordInput />

        <CollapsedSearchBox>
          <ProfileCardListSearchLuckyNumberInput />
        </CollapsedSearchBox>

        <Flex justify="end" gap="xs" pb="sm" mt="md">
          <Button type="submit" leftSection={<IconSearch size={14} />}>
            検索
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
