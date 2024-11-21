import { useContext } from "react";
import { useStore } from "zustand";

import type { ProfileCardSearchStore } from ".";
import { profileCardSearchConverter } from "../converter";
import { useProfileCardSearchParams } from "../params/hook";
import { ProfileCardSearchStoreContext } from "./provider";
import type { ProfileCardSearchForm } from "./type";

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
    return profileCardSearchConverter.toForm(params);
  };
