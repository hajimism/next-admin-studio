import type { StatusSearchOption } from "@/model/common/const/search-options";
import type { StateCreator } from "zustand";
import type { ProfileCardSearchForm } from "../type";

export type StatusSearchInputSlice = {
  status: StatusSearchOption;
  setStatus: (status: StatusSearchOption) => void;
};

export const createStatusSearchInputSlice =
  (initialState: ProfileCardSearchForm): StateCreator<StatusSearchInputSlice> =>
  (set) => ({
    status: initialState.status,
    setStatus: (status) => set({ status }),
  });
