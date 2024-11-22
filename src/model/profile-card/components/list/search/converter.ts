import type { ProfileCardSearchParams } from "./params";
import type { ProfileCardSearchForm } from "./store/type";

export const profileCardSearchConverter = {
  toParams: (store: ProfileCardSearchForm): ProfileCardSearchParams => {
    return {
      q: store.freeWord,
      ln: store.luckyNumber,
    };
  },
  toForm: (params: ProfileCardSearchParams): ProfileCardSearchForm => {
    return {
      freeWord: params.q,
      luckyNumber: params.ln,
    };
  },
};
