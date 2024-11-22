import { ProfileCardSearchStoreProvider } from "@/model/profile-card/components/list/search/store/provider";
import { type PropsWithChildren, Suspense } from "react";

export default function ProfileCardsLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <Suspense>
      <ProfileCardSearchStoreProvider>
        {children}
      </ProfileCardSearchStoreProvider>
    </Suspense>
  );
}
