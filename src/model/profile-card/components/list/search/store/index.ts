import { create } from "zustand";

import { createFreeWordSearchInputSlice } from "../inputs/free-word/slice";
import { createLuckyNumberSearchInputSlice } from "../inputs/lucky-number/slice";
import { createStatusSearchInputSlice } from "../inputs/status/slice";
import type { ProfileCardSearchForm } from "../inputs/type";
import type { ProfileCardSearchStore } from "./type";

export const createProfileCardSearchStore = (
  initialState: ProfileCardSearchForm,
) =>
  create<ProfileCardSearchStore>((set, get, store) => ({
    ...createFreeWordSearchInputSlice(initialState)(set, get, store),
    ...createStatusSearchInputSlice(initialState)(set, get, store),
    ...createLuckyNumberSearchInputSlice(initialState)(set, get, store),
    getSearchFormValue: get,
  }));
