import { create } from "zustand";

import { createOperationSlice } from "@/model/common/feature/operation/slice";
import { createValidationSlice } from "@/model/common/store/slice/validation";

import { createAdminLabelSlice } from "../form/inputs/admin-label/slice";
import { createBirthdaySlice } from "../form/inputs/birthday/slice";
import { createLuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import { createNameSlice } from "../form/inputs/name/slice";
import { createTagsSlice } from "../form/inputs/tags/slice";
import type { ProfileCardForm, ProfileCardFormStore } from "./type";

export const createProfileCardFormStore = (initialState?: ProfileCardForm) =>
  create<ProfileCardFormStore>()((set, get, store) => {
    return {
      ...createValidationSlice(set, get, store),
      ...createOperationSlice(set, get, store),
      ...createAdminLabelSlice(set, get, store),
      ...createBirthdaySlice(set, get, store),
      ...createLuckyNumberSlice(set, get, store),
      ...createNameSlice(set, get, store),
      ...createTagsSlice(set, get, store),
      id: "",
      setId: (id) => set({ id }),
      getFormValue: get,
      setFormValue: (profileCardForm) => set(profileCardForm),
      getFormIsValid: () =>
        get().getAdminLabelIsValid() &&
        get().getBirthdayIsValid() &&
        get().getLuckyNumberIsValid() &&
        get().getNameIsValid() &&
        get().getTagsIsValid(),
      ...initialState,
    };
  });
