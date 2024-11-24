import type { StatusSearchOption } from "@/model/common/const/search-options";

export type ProfileCardSearchForm = {
  freeWord: string;
  luckyNumber: number;
  status: StatusSearchOption;
};
