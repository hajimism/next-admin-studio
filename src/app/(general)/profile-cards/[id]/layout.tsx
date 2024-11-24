"use client";

import { type ReactNode, use } from "react";

import { profileCardConverter } from "@/model/profile-card/components/form-with-preview/converter";
import { useProfileCardServerState } from "@/model/profile-card/components/form-with-preview/server-state/hook";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
  children: ReactNode;
};

export default function ProfileCardDetailLayout(props: Props) {
  const { id } = use(props.params);
  const serverState = useProfileCardServerState(id);
  const formValue = profileCardConverter.toClient(serverState);

  return (
    <ProfileCardFormStoreProvider initialState={formValue}>
      {props.children}
    </ProfileCardFormStoreProvider>
  );
}
