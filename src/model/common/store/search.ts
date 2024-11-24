import type { StateCreator } from "zustand";

import type { StatusSearchOption } from "../const/search-options";

type FreeWordSearchInputSlice = {
  freeWord: string;
  setFreeWord: (freeWord: string) => void;
};

const createFreeWordSearchInputSlice =
  (initialState: {
    freeWord: string;
  }): StateCreator<FreeWordSearchInputSlice> =>
  (set) => ({
    freeWord: initialState.freeWord,
    setFreeWord: (freeWord) => set({ freeWord }),
  });

type StatusSearchInputSlice = {
  status: StatusSearchOption;
  setStatus: (status: StatusSearchOption) => void;
};

const createStatusSearchInputSlice =
  (initialState: {
    status: StatusSearchOption;
  }): StateCreator<StatusSearchInputSlice> =>
  (set) => ({
    status: initialState.status,
    setStatus: (status) => set({ status }),
  });

export const createCommonSearchFormSlice =
  (initialState: {
    freeWord: string;
    status: StatusSearchOption;
  }): StateCreator<StatusSearchInputSlice & FreeWordSearchInputSlice, [], []> =>
  (...a) => ({
    ...createFreeWordSearchInputSlice(initialState)(...a),
    ...createStatusSearchInputSlice(initialState)(...a),
  });

export type CommonSearchFormSlice<T> = FreeWordSearchInputSlice &
  StatusSearchInputSlice & {
    getSearchFormValue: () => T;
  };
