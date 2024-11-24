"use client";

import type { FC, FormEvent } from "react";

import { SearchFormTemplate } from "@/model/common/components/search-form-template";

import { ProfileCardListSearchFreeWordInput } from "./inputs/free-word";
import { ProfileCardListSearchLuckyNumberInput } from "./inputs/lucky-number";
import { ProfileCardListStatusSearchInput } from "./inputs/status";
import { profileCardListSearchFormToParam } from "./lib/form-to-param";
import { useProfileCardSearchParams } from "./params/hook";
import { useProfileCardSearchStore } from "./store/hook";

export const ProfileCardListSearchForm: FC = () => {
  const [, setParams] = useProfileCardSearchParams();
  const getSearchFormValue = useProfileCardSearchStore(
    (state) => state.getSearchFormValue,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams(profileCardListSearchFormToParam(getSearchFormValue()));
  };

  return (
    <SearchFormTemplate
      onSubmit={handleSubmit}
      basicFilter={<ProfileCardListSearchFreeWordInput />}
      advancedFilter={
        <>
          <ProfileCardListSearchLuckyNumberInput />
          <ProfileCardListStatusSearchInput />
        </>
      }
    />
  );
};
