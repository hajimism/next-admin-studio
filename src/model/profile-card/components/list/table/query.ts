import { cache } from "react";

import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { PROFILE_CARD_MOCK_DATA } from "@/model/profile-card/mock";

import type { ProfileCardTableListProps } from "./type";

export const getProfileCardTableItems = async ({
  page = 1,
}: {
  page: number;
}): Promise<ProfileCardTableListProps["profileCards"]> => {
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;

  return PROFILE_CARD_MOCK_DATA.slice(start, end).map((profileCard) => ({
    id: profileCard.id,
    adminLabel: profileCard.adminLabel,
    luckyNumber: profileCard.luckyNumber,
  }));
};

export const getProfileCardTableItemsCache = cache(getProfileCardTableItems);