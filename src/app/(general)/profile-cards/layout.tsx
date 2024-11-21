import { ProfileCardSearchStoreProvider } from "@/model/profile-card/components/list/search/store/provider";

export default function ProfileCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileCardSearchStoreProvider>{children}</ProfileCardSearchStoreProvider>
  );
}
