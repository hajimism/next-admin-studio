import type { ProfileCardSearchParams } from "../params";
import type { ProfileCardSearchForm } from "../store/type";

export const profileCardListSearchParamToForm = (
  params: ProfileCardSearchParams,
): ProfileCardSearchForm => {
  return {
    freeWord: params.q,
    luckyNumber: params.ln,
  };
};
