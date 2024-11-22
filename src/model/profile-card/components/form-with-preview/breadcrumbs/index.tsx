"use client";

import { DetailPageBreadcrumbs } from "@/model/common/components/breadcrumbs";
import { useProfileCardFormStore } from "../store/hook";

export const ProfileCardFormWithPreviewBreadcrumbs = () => {
  const adminLabel = useProfileCardFormStore((state) => state.adminLabel);

  return (
    <DetailPageBreadcrumbs modelName="ProfileCard" adminLabel={adminLabel} />
  );
};
