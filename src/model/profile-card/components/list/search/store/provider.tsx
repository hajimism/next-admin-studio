"use client";

import { type FC, createContext, useRef } from "react";
import { createProfileCardSearchStore } from "../store";
import type { ProfileCardSearchForm } from "./type";

export const ProfileCardSearchStoreContext = createContext<
  ReturnType<typeof createProfileCardSearchStore> | undefined
>(undefined);

export const ProfileCardSearchStoreProvider: FC<{
  children: React.ReactNode;
  initialState?: ProfileCardSearchForm;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ReturnType<typeof createProfileCardSearchStore>>();

  if (!storeRef.current) {
    storeRef.current = createProfileCardSearchStore(initialState);
  }

  return (
    <ProfileCardSearchStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileCardSearchStoreContext.Provider>
  );
};
