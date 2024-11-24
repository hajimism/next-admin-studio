import type { ProfileCardSearchParams } from "../params";
import type { ProfileCardSearchForm } from "../store/type";

export const profileCardListSearchFormToParam = (
  form: ProfileCardSearchForm,
): ProfileCardSearchParams => {
  return {
    q: form.freeWord,
    ln: form.luckyNumber,
  };
};
