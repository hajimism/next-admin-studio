"use client";

import { Text } from "@mantine/core";

import { DetailPageBreadcrumbs } from "@/model/common/components/breadcrumbs";
import { MODELS } from "@/model/common/const";
import { useIsNewItemPagePath } from "@/model/common/hooks/is-new-item-page-path";

import { useProfileCardFormStore } from "../store/hook";

export const ProfileCardFormWithPreviewBreadcrumbs = () => {
  const isNewItemPagePath = useIsNewItemPagePath("ProfileCard");
  const adminLabel = useProfileCardFormStore((state) => state.adminLabel);

  if (isNewItemPagePath)
    return <Text c="gray.6">{MODELS.ProfileCard.label} 新規作成</Text>;

  return (
    <DetailPageBreadcrumbs modelName="ProfileCard" adminLabel={adminLabel} />
  );
};
