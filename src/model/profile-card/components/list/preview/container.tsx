"use client";

import { useProfileCardTableItems } from "./query";
import { ProfileCardPreviewListView } from "./view";

export const ProfileCardPreviewListContainer = () => {
  const profileCards = useProfileCardTableItems();
  return <ProfileCardPreviewListView profileCards={profileCards} />;
};
