"use client";

import { useRouter } from "next/navigation";
import type { FC, ReactNode } from "react";

import { ListTab } from "@/model/common/components/list-tab";
import { NEW_ITEM_ID } from "@/model/common/const/key";

import { profileCardPathMapping } from "../../lib/path";

type Props = {
  table: ReactNode;
  preview: ReactNode;
};

export const ProfileCardListTab: FC<Props> = ({ table, preview }) => {
  const router = useRouter();

  const onCreateNew = () => {
    router.push(profileCardPathMapping.idToPath(NEW_ITEM_ID));
  };

  return (
    <ListTab
      renderTable={() => table}
      renderPreviewList={() => preview}
      onCreateNew={onCreateNew}
    />
  );
};
