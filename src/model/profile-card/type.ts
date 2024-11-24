import type { ContentStatus } from "@/model/common/const/content-status";

export type ProfileCard = {
  id: string;
  adminLabel: string;
  luckyNumber: number;
  name: string;
  tags: string[];
  creationStatus: ContentStatus;
};
