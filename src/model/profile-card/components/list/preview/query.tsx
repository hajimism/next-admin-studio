import { DEFAULT_PAGE_SIZE } from "@/model/common/components/pagination/const";
import { usePagination } from "@/model/common/components/pagination/hook";
import { PROFILE_CARD_MOCK_DATA } from "@/model/profile-card/mock";

import { profileCardConverter } from "../../form-with-preview/converter";
import { useProfileCardSearchParams } from "../search/params/hook";
import type { ProfileCardPreviewList } from "./type";

export const useProfileCardTableItems = (): ProfileCardPreviewList => {
  const [page] = usePagination();
  const [params] = useProfileCardSearchParams();
  const start = (page - 1) * DEFAULT_PAGE_SIZE;
  const end = start + DEFAULT_PAGE_SIZE;

  console.info(`本来ならparamを用いて絞り込みが行われるべき：${params}`);

  return PROFILE_CARD_MOCK_DATA.slice(start, end).map(
    profileCardConverter.toClient,
  );
};