import { Stack, Title } from "@mantine/core";
import Link from "next/link";

import { ProfileCardListSearchForm } from "@/model/profile-card/components/list/search";

export default function ProfileCardListPage() {
  return (
    <Stack p="xl" gap="lg">
      <Title>プロフィールカード一覧</Title>
      <ProfileCardListSearchForm />
      <Link href="/profile-cards/1">詳細へ</Link>
      <Link href="/profile-cards/new">新規作成へ</Link>
    </Stack>
  );
}
