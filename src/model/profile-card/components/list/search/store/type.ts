import type { FreeWordSearchInputSlice } from "../inputs/free-word/slice";
import type { LuckyNumberSearchInputSlice } from "../inputs/lucky-number/slice";
import type { ProfileCardSearchForm } from "../inputs/type";

export type ProfileCardSearchStore = FreeWordSearchInputSlice &
  LuckyNumberSearchInputSlice & {
    getSearchFormValue: () => ProfileCardSearchForm;
  };
