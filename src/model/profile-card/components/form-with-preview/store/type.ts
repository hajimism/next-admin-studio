import type { CommonFormSlice } from "@/model/common/store/form";

import type { AdminLabelSlice } from "../form/inputs/admin-label/slice";
import type { LuckyNumberSlice } from "../form/inputs/lucky-number/slice";
import type { NameSlice } from "../form/inputs/name/slice";
import type { TagsSlice } from "../form/inputs/tags/slice";
import type { ProfileCardForm } from "../form/type";

export type ProfileCardFormStore = AdminLabelSlice &
  LuckyNumberSlice &
  NameSlice &
  TagsSlice &
  CommonFormSlice<ProfileCardForm>;
