import { ScrollArea, SimpleGrid, Space, Stack, Text } from "@mantine/core";

import { ProfileCardFormWithPreviewBreadcrumbs } from "./breadcrumbs";
import { ProfileCardForm } from "./form";
import { ProfileCardFormPreview } from "./preview";

export const ProfileCardFormWithPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <ScrollArea p="xl" className="h-[calc(100vh-60px)]">
        <Stack>
          <ProfileCardFormWithPreviewBreadcrumbs />
          <Stack
            justify="center"
            align="center"
            gap="lg"
            className="h-[calc(100vh-160px)]"
          >
            <ProfileCardFormPreview />
            <Text c="gray" size="sm">
              プレビューは実際の見た目とは異なる可能性があります
            </Text>

            <Space h={80}>{/* ど真ん中よりも少し上に配置したい */}</Space>
          </Stack>
        </Stack>
      </ScrollArea>

      <ProfileCardForm />
    </SimpleGrid>
  );
};
