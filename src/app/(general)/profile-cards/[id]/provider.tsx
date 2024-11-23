"use client";

import type { FC, ReactNode } from "react";

import { profileCardConverter } from "@/model/profile-card/components/form-with-preview/converter";
import { useProfileCardServerState } from "@/model/profile-card/components/form-with-preview/server-state/hook";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

export const ProfileCardFormProvider: FC<{
  id: string;
  children: ReactNode;
}> = ({ id, children }) => {
  const serverState = useProfileCardServerState(id);
  const formValue = profileCardConverter.toClient(serverState);

  return (
    <ProfileCardFormStoreProvider initialState={formValue}>
      {children}
    </ProfileCardFormStoreProvider>
  );
};
