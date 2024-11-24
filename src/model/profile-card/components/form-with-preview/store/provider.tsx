"use client";

import { type FC, type ReactNode, createContext, useRef } from "react";

import { createProfileCardFormStore } from ".";
import type { ProfileCardForm } from "../form/type";

export type ProfileCardFormStoreApi = ReturnType<
  typeof createProfileCardFormStore
>;

export const ProfileCardFormStoreContext = createContext<
  ProfileCardFormStoreApi | undefined
>(undefined);

export const ProfileCardFormStoreProvider: FC<{
  children: ReactNode;
  initialState?: ProfileCardForm;
}> = ({ children, initialState }) => {
  const storeRef = useRef<ProfileCardFormStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createProfileCardFormStore(initialState);
  }

  return (
    <ProfileCardFormStoreContext.Provider value={storeRef.current}>
      {children}
    </ProfileCardFormStoreContext.Provider>
  );
};
