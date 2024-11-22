"use client";

import type { FC } from "react";

import { usePagination } from "@/model/common/components/pagination/hook";

import { useProfileCardTableItems } from "./query";
import { ProfileCardTableListView } from "./view";

export const ProfileCardTableListContainer: FC = () => {
  const [page] = usePagination();
  const profileCards = useProfileCardTableItems({ page });

  return <ProfileCardTableListView profileCards={profileCards} />;
};
