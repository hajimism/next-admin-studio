import { cache } from "react";

import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { PROFILE_CARD_MOCK_DATA } from "@/model/profile-card/mock";

const getProfileCardListTotalPageCount = async () => {
  const totalCount = PROFILE_CARD_MOCK_DATA.length;

  return Math.ceil(totalCount / DEFAULT_PAGE_SIZE);
};

export const getProfileCardListTotalPageCountCache = cache(
  getProfileCardListTotalPageCount,
);
