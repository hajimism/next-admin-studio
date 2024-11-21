import { create } from "zustand";

import {
  type FreeWordSearchInputSlice,
  createFreeWordSearchInputSlice,
} from "../inputs/free-word/slice";
import {
  type LuckyNumberSearchInputSlice,
  createLuckyNumberSearchInputSlice,
} from "../inputs/lucky-number/slice";
import type { ProfileCardSearchForm } from "./type";

export type ProfileCardSearchStore = FreeWordSearchInputSlice &
  LuckyNumberSearchInputSlice;

export const createProfileCardSearchStore = (
  initialState?: ProfileCardSearchForm,
) =>
  create<ProfileCardSearchStore>((set, get, store) => ({
    ...createFreeWordSearchInputSlice(set, get, store),
    ...createLuckyNumberSearchInputSlice(set, get, store),
    ...initialState,
  }));
