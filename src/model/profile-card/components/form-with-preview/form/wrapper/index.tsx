"use client";

import type { FC, PropsWithChildren } from "react";

import { ContentFormTemplate } from "@/model/common/components/content-form-template";

import { ProfileCardFormFooter } from "./footer";
import { ProfileCardFormHeader } from "./header";

export const ProfileCardFormWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContentFormTemplate
      renderHeader={() => <ProfileCardFormHeader />}
      renderFooter={() => <ProfileCardFormFooter />}
    >
      {children}
    </ContentFormTemplate>
  );
};
