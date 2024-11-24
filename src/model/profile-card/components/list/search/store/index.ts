import { create } from "zustand";

import { createFreeWordSearchInputSlice } from "../inputs/free-word/slice";
import { createLuckyNumberSearchInputSlice } from "../inputs/lucky-number/slice";
import type { ProfileCardSearchForm } from "../inputs/type";
import type { ProfileCardSearchStore } from "./type";

export const createProfileCardSearchStore = (
  initialState?: ProfileCardSearchForm,
) =>
  create<ProfileCardSearchStore>((set, get, store) => ({
    ...createFreeWordSearchInputSlice(set, get, store),
    ...createLuckyNumberSearchInputSlice(set, get, store),
    getSearchFormValue: get,
    ...initialState,
  }));
