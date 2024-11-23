"use client";

import type { FC, ReactNode } from "react";

import { profileCardConverter } from "../converter";
import type { ProfileCardForm } from "../store/type";
import { useProfileCardServerState } from "./hook";

export const ProfileCardFormProviderContainer: FC<{
  id: string;
  children: (formValue: ProfileCardForm) => ReactNode;
}> = async ({ id, children }) => {
  const serverState = useProfileCardServerState(id);
  const formValue = profileCardConverter.toClient(serverState);

  return <>{children(formValue)}</>;
};
