import type { ProfileCardFormServerState } from "../server-state/type";
import { PROFILE_CARD_FORM_STORE_INITIAL_STATE } from "../store/const";
import type { ProfileCardForm } from "../store/type";

export const profileCardConverter = {
  toClient: (
    serverState: ProfileCardFormServerState | undefined,
  ): ProfileCardForm => {
    if (!serverState) return PROFILE_CARD_FORM_STORE_INITIAL_STATE;

    return {
      ...serverState,
    };
  },
  toServer: (clientState: ProfileCardForm): ProfileCardFormServerState => {
    return {
      ...clientState,
      creationStatus: "DRAFT",
    };
  },
};
