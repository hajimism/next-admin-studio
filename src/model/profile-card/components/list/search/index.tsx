import type { FC } from "react";

import { CollapsedSearchBox } from "@/model/common/components/collapsed-search-box";

import { ProfileCardListSearchFreeWordInput } from "./inputs/free-word";
import { ProfileCardListSearchLuckyNumberInput } from "./inputs/lucky-number";
import { ProfileCardListSearchFormWrapper } from "./wrapper";

export const ProfileCardListSearchForm: FC = () => {
  return (
    <ProfileCardListSearchFormWrapper>
      <ProfileCardListSearchFreeWordInput />

      <CollapsedSearchBox>
        <ProfileCardListSearchLuckyNumberInput />
      </CollapsedSearchBox>
    </ProfileCardListSearchFormWrapper>
  );
};
