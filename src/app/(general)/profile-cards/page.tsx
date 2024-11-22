import { Stack, Title } from "@mantine/core";
import { Suspense } from "react";

import { ProfileCardList } from "@/model/profile-card/components/list";

export default function ProfileCardListPage() {
  return (
    <Stack p="xl" gap="lg">
      <Title>プロフィールカード一覧</Title>
      <Suspense>
        <ProfileCardList />
      </Suspense>
    </Stack>
  );
}
