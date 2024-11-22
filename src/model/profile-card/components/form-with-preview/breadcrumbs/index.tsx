"use client";

import { DetailPageBreadcrumbs } from "@/model/common/components/breadcrumbs";
import { NEW_ITEM_ID } from "@/model/common/const/key";
import { useContentIdFromPagePath } from "@/model/common/hooks/model-page-path";

import { useProfileCardFormStore } from "../store/hook";

export const ProfileCardFormWithPreviewBreadcrumbs = () => {
  const contentId = useContentIdFromPagePath("ProfileCard");
  const isNewItemPagePath = contentId === NEW_ITEM_ID;
  const adminLabel = useProfileCardFormStore((state) => state.adminLabel);

  const current = isNewItemPagePath ? "新規作成" : adminLabel;

  return <DetailPageBreadcrumbs modelName="ProfileCard" current={current} />;
};
