import { ProfileCardSearchStoreProvider } from "@/model/profile-card/components/list/search/store/provider";
import type { PropsWithChildren } from "react";

export default function ProfileCardsLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <ProfileCardSearchStoreProvider>{children}</ProfileCardSearchStoreProvider>
  );
}
