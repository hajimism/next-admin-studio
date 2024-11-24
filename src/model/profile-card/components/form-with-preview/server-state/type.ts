import type { ContentStatus } from "@/model/common/const/content-status";

export type ProfileCardFormServerState = {
  id: string;
  adminLabel: string;
  luckyNumber: number;
  name: string;
  tags: string[];
  creationStatus: ContentStatus;
};
