import type { SearchParams } from "nuqs";

import { copyAndNewParamsCache } from "@/model/common/feature/operation/copy-and-new/params";
import { ProfileCardFormWithPreview } from "@/model/profile-card/components/form-with-preview";
import { profileCardServerToForm } from "@/model/profile-card/components/form-with-preview/lib/server-to-form";
import { getProfileCard } from "@/model/profile-card/components/form-with-preview/query";
import { PROFILE_CARD_FORM_STORE_INITIAL_STATE } from "@/model/profile-card/components/form-with-preview/store/const";
import { ProfileCardFormStoreProvider } from "@/model/profile-card/components/form-with-preview/store/provider";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function NewProfileCardPage(props: Props) {
  const { base } = await copyAndNewParamsCache.parse(props.searchParams);

  const initialState = base
    ? profileCardServerToForm(await getProfileCard(base))
    : PROFILE_CARD_FORM_STORE_INITIAL_STATE;

  return (
    <ProfileCardFormStoreProvider initialState={initialState}>
      <ProfileCardFormWithPreview />
    </ProfileCardFormStoreProvider>
  );
}
