import { useContext } from "react";
import { useStore } from "zustand";

import type { ProfileCardSearchForm } from "../inputs/type";
import { profileCardListSearchParamToForm } from "../lib/param-to-form";
import { useProfileCardSearchParams } from "../params/hook";
import { ProfileCardSearchStoreContext } from "./provider";
import type { ProfileCardSearchStore } from "./type";

export const useProfileCardSearchStore = <T>(
  selector: (store: ProfileCardSearchStore) => T,
): T => {
  const profileCardSearchStoreContext = useContext(
    ProfileCardSearchStoreContext,
  );

  if (!profileCardSearchStoreContext) {
    throw new Error(
      "useProfileCardSearchStore must be used within a ProfileCardSearchStoreProvider",
    );
  }
  return useStore(profileCardSearchStoreContext, selector);
};

export const useProfileCardSearchStoreInitialValue =
  (): ProfileCardSearchForm => {
    const [params] = useProfileCardSearchParams();
    return profileCardListSearchParamToForm(params);
  };
