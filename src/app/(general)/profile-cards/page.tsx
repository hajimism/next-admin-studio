import { Stack, Title } from "@mantine/core";

import { ProfileCardListContainer } from "@/model/profile-card/components/list/container";

export default function ProfileCardListPage() {
  return (
    <Stack p="xl" gap="lg">
      <Title>プロフィールカード一覧</Title>
      <ProfileCardListContainer />
    </Stack>
  );
}
