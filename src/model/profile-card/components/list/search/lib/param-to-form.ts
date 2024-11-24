import type { ProfileCardSearchForm } from "../inputs/type";
import type { ProfileCardSearchParams } from "../params";

export const profileCardListSearchParamToForm = (
  params: ProfileCardSearchParams,
): ProfileCardSearchForm => {
  return {
    freeWord: params.q,
    luckyNumber: params.ln,
    status: params.status,
  };
};
