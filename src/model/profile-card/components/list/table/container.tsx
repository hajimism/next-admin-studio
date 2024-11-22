"use client";

import type { FC } from "react";

import { useProfileCardTableItems } from "./query";
import { ProfileCardTableListView } from "./view";

export const ProfileCardTableListContainer: FC = () => {
  const profileCards = useProfileCardTableItems();

  return <ProfileCardTableListView profileCards={profileCards} />;
};
