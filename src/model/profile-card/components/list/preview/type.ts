import type { ProfileCardForm } from "../../form-with-preview/form/type";

export type ProfileCardPreviewList = Pick<
  ProfileCardForm,
  "id" | "name" | "luckyNumber" | "tags"
>[];
