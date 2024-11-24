import { ScrollArea, SimpleGrid, Space, Stack, Text } from "@mantine/core";

import { ProfileCardFormWithPreviewBreadcrumbs } from "./breadcrumbs";
import { ProfileCardForm } from "./form";
import { ProfileCardFormPreview } from "./preview";

export const ProfileCardFormWithPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Stack p="xl">
        <ProfileCardFormWithPreviewBreadcrumbs />
        <Space h={32} />
        <ScrollArea className="h-[calc(100vh-210px)]" type="never">
          <Stack justify="center" align="center" gap="lg">
            <ProfileCardFormPreview />
            <Text c="gray" size="sm">
              プレビューは実際の見た目とは異なる可能性があります
            </Text>
          </Stack>
        </ScrollArea>
      </Stack>

      <ProfileCardForm />
    </SimpleGrid>
  );
};
