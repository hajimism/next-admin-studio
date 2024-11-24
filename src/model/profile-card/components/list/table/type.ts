import type { ProfileCard } from "../../../type";

export type ProfileCardTableList = Pick<
  ProfileCard,
  "id" | "adminLabel" | "luckyNumber"
>[];
