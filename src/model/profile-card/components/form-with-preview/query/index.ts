import { NEW_ITEM_ID } from "@/model/common/const/key";
import { PROFILE_CARD_MOCK_DATA } from "@/model/profile-card/mock";

import type { ProfileCardFormServerState } from "../server-state/type";

export const getProfileCard = (
  id: string,
): ProfileCardFormServerState | undefined => {
  if (id === NEW_ITEM_ID) return undefined;

  const profileCard = PROFILE_CARD_MOCK_DATA.find(
    (profileCard) => profileCard.id === id,
  );

  return profileCard;
};
