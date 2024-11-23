import { ProfileCardFormWithPreview } from "@/model/profile-card/components/form-with-preview";
import { ProfileCardFormServerStateProviderContainer } from "@/model/profile-card/components/form-with-preview/server-state";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProfileCardDetailPage(props: Props) {
  const { id } = await props.params;

  return (
    <ProfileCardFormServerStateProviderContainer id={id}>
      {(formValue) => (
        <ProfileCardFormStoreProvider initialState={formValue}>
          <ProfileCardFormWithPreview />
        </ProfileCardFormStoreProvider>
      )}
    </ProfileCardFormServerStateProviderContainer>
  );
}
