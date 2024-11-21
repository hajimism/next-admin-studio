"use client";

import { type FC, createContext, useRef } from "react";

import { createProfileCardSearchStore } from "../store";
import { useProfileCardSearchStoreInitialValue } from "./hook";

export const ProfileCardSearchStoreContext = createContext<
  ReturnType<typeof createProfileCardSearchStore> | undefined
>(undefined);

export const ProfileCardSearchStoreProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<ReturnType<typeof createProfileCardSearchStore>>();
  const initialState = useProfileCardSearchStoreInitialValue();

  if (!storeRef.current) {
    storeRef.current = createProfileCardSearchStore(initialState);
  }

  return (
    <ProfileCardSearchStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileCardSearchStoreContext.Provider>
  );
};
