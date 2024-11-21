import type { StateCreator } from "zustand";

export type LuckyNumberSearchInputSlice = {
  luckyNumber: number;
  setLuckyNumber: (luckyNumber: number) => void;
};

export const createLuckyNumberSearchInputSlice: StateCreator<
  LuckyNumberSearchInputSlice
> = (set) => ({
  luckyNumber: 0,
  setLuckyNumber: (luckyNumber) => set({ luckyNumber }),
});
