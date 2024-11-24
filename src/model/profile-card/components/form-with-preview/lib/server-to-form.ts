import type { ProfileCard } from "@/model/profile-card/type";

import { PROFILE_CARD_FORM_STORE_INITIAL_STATE } from "../store/const";
import type { ProfileCardForm } from "../store/type";

export const profileCardServerToForm = (
  serverState: ProfileCard | undefined,
): ProfileCardForm => {
  if (!serverState) return PROFILE_CARD_FORM_STORE_INITIAL_STATE;

  return {
    ...serverState,
  };
};
