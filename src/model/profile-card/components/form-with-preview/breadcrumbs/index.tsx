"use client";

import { DetailPageBreadcrumbs } from "@/model/common/components/breadcrumbs";
import { useIsNewItemPagePath } from "@/model/common/hooks/is-new-item-page-path";

import { useProfileCardFormStore } from "../store/hook";

export const ProfileCardFormWithPreviewBreadcrumbs = () => {
  const isNewItemPagePath = useIsNewItemPagePath("ProfileCard");
  const adminLabel = useProfileCardFormStore((state) => state.adminLabel);

  const current = isNewItemPagePath ? "新規作成" : adminLabel;

  return <DetailPageBreadcrumbs modelName="ProfileCard" current={current} />;
};
