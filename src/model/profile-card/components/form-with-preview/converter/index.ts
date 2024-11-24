import type { ProfileCard } from "../../../type";
import { PROFILE_CARD_FORM_STORE_INITIAL_STATE } from "../store/const";
import type { ProfileCardForm } from "../store/type";

export const profileCardConverter = {
  toClient: (serverState: ProfileCard | undefined): ProfileCardForm => {
    if (!serverState) return PROFILE_CARD_FORM_STORE_INITIAL_STATE;

    return {
      ...serverState,
    };
  },
};
