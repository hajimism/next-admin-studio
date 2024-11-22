import type { ProfileCardFormServerState } from "../../form-with-preview/server-state/type";

export type ProfileCardTableList = Pick<
  ProfileCardFormServerState,
  "id" | "adminLabel" | "luckyNumber"
>[];
