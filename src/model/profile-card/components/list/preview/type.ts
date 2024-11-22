import type { ProfileCardForm } from "../../form-with-preview/store/type";

export type ProfileCardPreviewList = Pick<
  ProfileCardForm,
  "id" | "name" | "luckyNumber" | "birthday" | "tags"
>[];
