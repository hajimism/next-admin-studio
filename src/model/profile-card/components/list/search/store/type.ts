import type { FreeWordSearchInputSlice } from "../inputs/free-word/slice";
import type { LuckyNumberSearchInputSlice } from "../inputs/lucky-number/slice";
import type { StatusSearchInputSlice } from "../inputs/status/slice";
import type { ProfileCardSearchForm } from "../inputs/type";

export type ProfileCardSearchStore = {
  getSearchFormValue: () => ProfileCardSearchForm;
} & FreeWordSearchInputSlice &
  LuckyNumberSearchInputSlice &
  StatusSearchInputSlice;
