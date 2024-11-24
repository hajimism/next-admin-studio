"use client";

import { ProfileCardPreviewTemplate } from "../../preview/template";
import { ProfileCardLuckyNumberPreviewContainer } from "./lucky-number";
import { ProfileCardNamePreviewContainer } from "./name";
import { ProfileCardTagsPreviewContainer } from "./tags";

export const ProfileCardFormPreview = () => {
  return (
    <ProfileCardPreviewTemplate
      name={<ProfileCardNamePreviewContainer />}
      luckyNumber={<ProfileCardLuckyNumberPreviewContainer />}
      tags={<ProfileCardTagsPreviewContainer />}
    />
  );
};
