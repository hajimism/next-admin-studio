import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function NewProfileCardLayout(props: Props) {
  return (
    <ProfileCardFormStoreProvider>
      {props.children}
    </ProfileCardFormStoreProvider>
  );
}
