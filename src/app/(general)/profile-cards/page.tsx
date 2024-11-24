import { Stack, Title } from "@mantine/core";

import { ProfileCardList } from "@/model/profile-card/components/list";

export default function ProfileCardListPage() {
  return (
    <main>
      <Stack p="xl" gap="lg">
        <Title>プロフィールカード一覧</Title>
        <ProfileCardList />
      </Stack>
    </main>
  );
}
