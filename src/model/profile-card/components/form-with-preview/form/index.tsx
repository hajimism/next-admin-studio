import type { FC } from "react";

import { ProfileCardAdminLabelInput } from "./inputs/admin-label";
import { ProfileCardLuckyNumberInput } from "./inputs/lucky-number";
import { ProfileCardNameInput } from "./inputs/name";
import { ProfileCardTagsInput } from "./inputs/tags";
import { ProfileCardFormWrapper } from "./wrapper";

export const ProfileCardForm: FC = () => {
  return (
    <ProfileCardFormWrapper>
      <ProfileCardAdminLabelInput />
      <ProfileCardNameInput />
      <ProfileCardLuckyNumberInput />
      <ProfileCardTagsInput />
    </ProfileCardFormWrapper>
  );
};
