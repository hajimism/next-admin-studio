import type { StateCreator } from "zustand";

export type FreeWordSearchInputSlice = {
  freeWord: string;
  setFreeWord: (freeWord: string) => void;
};

export const createFreeWordSearchInputSlice: StateCreator<
  FreeWordSearchInputSlice
> = (set) => ({
  freeWord: "",
  setFreeWord: (freeWord) => set({ freeWord }),
});
