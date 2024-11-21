"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";

import { ModelPathMapping } from "@/model/common/const";

import { ProfileCardListView } from "./view";

export const ProfileCardListContainer: FC = () => {
  const router = useRouter();

  const onCreateNew = () => {
    router.push(ModelPathMapping.ProfileCard.idToPath("new"));
  };

  return <ProfileCardListView onCreateNew={onCreateNew} />;
};
