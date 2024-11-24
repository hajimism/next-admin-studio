import type { CommonSearchFormSlice } from "@/model/common/store/search";

import type { LuckyNumberSearchInputSlice } from "../inputs/lucky-number/slice";
import type { ProfileCardSearchForm } from "../inputs/type";

export type ProfileCardSearchStore =
  CommonSearchFormSlice<ProfileCardSearchForm> & LuckyNumberSearchInputSlice;
