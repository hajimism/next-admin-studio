import type { ProfileCard } from "@/model/profile-card/type";

export type ProfileCardPreviewList = Pick<
  ProfileCard,
  "id" | "name" | "luckyNumber" | "tags"
>[];
