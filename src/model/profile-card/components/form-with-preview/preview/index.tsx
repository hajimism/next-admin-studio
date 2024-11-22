"use client";

import { ProfileCardPreviewTemplate } from "../../preview/template";
import { ProfileCardBirthdayPreviewContainer } from "./birthday";
import { ProfileCardLuckyNumberPreviewContainer } from "./lucky-number";
import { ProfileCardNamePreviewContainer } from "./name";
import { ProfileCardTagsPreviewContainer } from "./tags";

export const ProfileCardFormPreview = () => {
  return (
    <ProfileCardPreviewTemplate
      name={<ProfileCardNamePreviewContainer />}
      birthday={<ProfileCardBirthdayPreviewContainer />}
      luckyNumber={<ProfileCardLuckyNumberPreviewContainer />}
      tags={<ProfileCardTagsPreviewContainer />}
    />
  );
};
