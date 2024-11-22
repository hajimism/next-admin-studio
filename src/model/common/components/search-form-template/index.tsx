import { Box, Button, Flex, Text } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import type { FC, FormEventHandler } from "react";

import { CollapsedSearchBox } from "./collapsed-search-box";

export const SearchFormTemplate: FC<{
  renderBasicFilters: () => React.ReactNode;
  renderAdvancedFilters: () => React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}> = ({ renderBasicFilters, renderAdvancedFilters, onSubmit }) => {
  return (
    <Box className="rounded border-gray-4 border-solid" pt={12} px={24}>
      <form onSubmit={onSubmit}>
        <Text c="gray" pb={4} size="sm">
          絞り込み条件
        </Text>

        {renderBasicFilters()}

        <CollapsedSearchBox>{renderAdvancedFilters()}</CollapsedSearchBox>

        <Flex justify="end" gap="xs" pb="sm" mt="md">
          <Button type="submit" leftSection={<IconFilter size={14} />}>
            絞り込み
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
