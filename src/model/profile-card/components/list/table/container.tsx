"use client";

import { usePagination } from "@/model/common/components/pagination/hook";
import { type FC, use } from "react";
import { getProfileCardTableItemsCache } from "./query";
import { ProfileCardTableListView } from "./view";

export const ProfileCardTableListContainer: FC = () => {
  const [page] = usePagination();
  const profileCards = use(getProfileCardTableItemsCache({ page }));

  return <ProfileCardTableListView profileCards={profileCards} />;
};
