import type { StateCreator } from "zustand";
import type { ProfileCardSearchForm } from "../type";

export type FreeWordSearchInputSlice = {
  freeWord: string;
  setFreeWord: (freeWord: string) => void;
};

export const createFreeWordSearchInputSlice =
  (
    initialState: ProfileCardSearchForm,
  ): StateCreator<FreeWordSearchInputSlice> =>
  (set) => ({
    freeWord: initialState.freeWord,
    setFreeWord: (freeWord) => set({ freeWord }),
  });
