import { ProfileCardFormWithPreview } from "@/model/profile-card/components/form-with-preview";

import { ProfileCardFormProvider } from "./provider";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProfileCardDetailPage(props: Props) {
  const { id } = await props.params;

  return (
    <ProfileCardFormProvider id={id}>
      <ProfileCardFormWithPreview />
    </ProfileCardFormProvider>
  );
}
