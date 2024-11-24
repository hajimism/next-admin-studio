import { create } from "zustand";

import { createCommonSearchFormSlice } from "@/model/common/store/search";

import { createLuckyNumberSearchInputSlice } from "../inputs/lucky-number/slice";
import type { ProfileCardSearchForm } from "../inputs/type";
import type { ProfileCardSearchStore } from "./type";

export const createProfileCardSearchStore = (
  initialState: ProfileCardSearchForm,
) =>
  create<ProfileCardSearchStore>((set, get, store) => ({
    ...createCommonSearchFormSlice(initialState)(set, get, store),
    ...createLuckyNumberSearchInputSlice(initialState)(set, get, store),
    getSearchFormValue: get,
  }));
