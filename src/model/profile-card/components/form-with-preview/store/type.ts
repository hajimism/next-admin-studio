import type { CommonFormSlice } from "@/model/common/store/type";

import type { AdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { BirthdaySlice } from "../form/inputs/birthday/slice";
import type { LuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import type { NameSlice } from "../form/inputs/name/slice";
import type { TagsSlice } from "../form/inputs/tags/slice";

export type ProfileCardForm = {
  id: string;
  adminLabel: string;
  birthday: Date | null;
  luckyNumber: number;
  name: string;
  tags: string[];
};

export type ProfileCardFormSlice = {
  id: string;
  setId: (id: string) => void;
  getFormValue: () => ProfileCardForm;
  setFormValue: (profileCardForm: ProfileCardForm) => void;
};

export type ProfileCardFormStore = AdminLabelSlice &
  BirthdaySlice &
  LuckyNumberSlice &
  NameSlice &
  TagsSlice &
  ProfileCardFormSlice &
  CommonFormSlice;
