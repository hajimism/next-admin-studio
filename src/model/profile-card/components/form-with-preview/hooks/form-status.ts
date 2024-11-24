import {
  CONTENT_STATUS,
  type ContentStatus,
} from "@/model/common/const/content-status";

import { useProfileCardServerState } from "./server-state";

export const useProfileCardFormStatus = (id: string): ContentStatus => {
  const serverState = useProfileCardServerState(id);
  return serverState?.creationStatus ?? CONTENT_STATUS.NEW;
};
