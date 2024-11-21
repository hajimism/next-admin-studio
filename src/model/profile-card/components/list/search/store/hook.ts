import { useContext } from "react";
import { useStore } from "zustand";

import type { ProfileCardSearchStore } from ".";
import { ProfileCardSearchStoreContext } from "./provider";

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
