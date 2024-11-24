import type { ProfileCardSearchForm } from "../inputs/type";
import type { ProfileCardSearchParams } from "../params";

export const profileCardListSearchFormToParam = (
  form: ProfileCardSearchForm,
): ProfileCardSearchParams => {
  return {
    q: form.freeWord,
    ln: form.luckyNumber,
  };
};
