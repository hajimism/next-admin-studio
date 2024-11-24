"use client";

import { type ReactNode, use } from "react";

import { useProfileCardServerState } from "@/model/profile-card/components/form-with-preview/hooks/server-state";
import { profileCardServerToForm } from "@/model/profile-card/components/form-with-preview/lib/server-to-form";
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
  const formValue = profileCardServerToForm(serverState);

  return (
    <ProfileCardFormStoreProvider initialState={formValue}>
      {props.children}
    </ProfileCardFormStoreProvider>
  );
}
