import type { SearchParams } from "nuqs";

import { copyAndNewParamsCache } from "@/model/common/params/copy-and-new";
import { ProfileCardFormWithPreview } from "@/model/profile-card/components/form-with-preview";
import { profileCardConverter } from "@/model/profile-card/components/form-with-preview/converter";
import { getProfileCard } from "@/model/profile-card/components/form-with-preview/query";
import { PROFILE_CARD_FORM_STORE_INITIAL_STATE } from "@/model/profile-card/components/form-with-preview/store/const";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function NewProfileCardPage(props: Props) {
  const { base } = await copyAndNewParamsCache.parse(props.searchParams);

  const initialState = base
    ? profileCardConverter.toClient(await getProfileCard(base))
    : PROFILE_CARD_FORM_STORE_INITIAL_STATE;

  return (
    <ProfileCardFormStoreProvider initialState={initialState}>
      <ProfileCardFormWithPreview />
    </ProfileCardFormStoreProvider>
  );
}
