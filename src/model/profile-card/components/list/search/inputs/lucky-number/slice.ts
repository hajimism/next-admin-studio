import type { StateCreator } from "zustand";
import type { ProfileCardSearchForm } from "../type";

export type LuckyNumberSearchInputSlice = {
  luckyNumber: number;
  setLuckyNumber: (luckyNumber: number) => void;
};

export const createLuckyNumberSearchInputSlice =
  (
    initialState: ProfileCardSearchForm,
  ): StateCreator<LuckyNumberSearchInputSlice> =>
  (set) => ({
    luckyNumber: initialState.luckyNumber,
    setLuckyNumber: (luckyNumber) => set({ luckyNumber }),
  });
