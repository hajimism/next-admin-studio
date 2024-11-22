import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { PROFILE_CARD_MOCK_DATA } from "@/model/profile-card/mock";

export const useProfileCardListTotalPageCount = () => {
  const totalCount = PROFILE_CARD_MOCK_DATA.length;

  return Math.ceil(totalCount / DEFAULT_PAGE_SIZE);
};
