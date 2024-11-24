import { create } from "zustand";

import { createOperationSlice } from "@/model/common/feature/operation/slice";
import { createValidationSlice } from "@/model/common/store/form";

import { createAdminLabelSliceX } from "../form/inputs/admin-label/slice";
import { createLuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import { createNameSlice } from "../form/inputs/name/slice";
import { createTagsSlice } from "../form/inputs/tags/slice";
import type { ProfileCardForm } from "../form/type";
import type { ProfileCardFormStore } from "./type";

export const createProfileCardFormStore = (initialState?: ProfileCardForm) =>
  create<ProfileCardFormStore>()((set, get, store) => {
    return {
      ...createValidationSlice(set, get, store),
      ...createOperationSlice(set, get, store),
      ...createAdminLabelSliceX(initialState)(set, get, store),
      ...createLuckyNumberSlice(initialState)(set, get, store),
      ...createNameSlice(initialState)(set, get, store),
      ...createTagsSlice(initialState)(set, get, store),
      id: "",
      setId: (id) => set({ id }),
      getFormValue: get,
      setFormValue: (profileCardForm) => set(profileCardForm),
      getFormIsValid: () =>
        get().getAdminLabelIsValid() &&
        get().getLuckyNumberIsValid() &&
        get().getNameIsValid() &&
        get().getTagsIsValid(),
    };
  });
