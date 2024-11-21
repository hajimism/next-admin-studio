"use client";

import type { FC, FormEvent, PropsWithChildren } from "react";

import { SearchFormWrapper } from "@/model/common/components/search-form-wrapper";

import { profileCardSearchConverter } from "./converter";
import { useProfileCardSearchParams } from "./params/hook";
import { useProfileCardSearchStore } from "./store/hook";

export const ProfileCardListSearchFormWrapper: FC<PropsWithChildren> = ({
  children,
}) => {
  const [, setParams] = useProfileCardSearchParams();
  const getSearchFormValue = useProfileCardSearchStore(
    (state) => state.getSearchFormValue,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParams(profileCardSearchConverter.toParams(getSearchFormValue()));
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>{children}</SearchFormWrapper>
  );
};
